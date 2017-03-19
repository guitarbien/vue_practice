Vue.component('modal', {
    template: `
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete"></button>
                </header>

                <section class="modal-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus iure ipsa quidem! Nulla in voluptate iure natus commodi eos, assumenda quod aliquam fuga modi cum et, rerum saepe minima.
                </section>

                <footer class="modal-card-foot">
                    <a class="button is-success">Save changes</a>
                    <a class="button">Cancel</a>
                </footer>
            </div>
        </div>
    `
})

new Vue({
    el: "#root"
});
