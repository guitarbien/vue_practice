import Errors from './Errors';
import axios from 'axios';

class Form {
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    data() {
        let data = {};

        for (let property in this.property) {
            data[property] = this[property];
        }

        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = null;
        }

        this.errors.clear();
    }

    post(url) {
        return this.submit('post', url);
    }

    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            // axios.post('/projects', this.$data);
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data);
                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);
                    reject(error.response.data);
                });
        });
    }

    onSuccess(data) {
        alert(data.message);
        this.reset();
    }

    onFail(errors) {
        this.errors.record(errors);
    }
}

export default Form;
