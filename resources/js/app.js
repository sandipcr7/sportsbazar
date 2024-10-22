import './bootstrap';
import '../css/app.css';
// import '/resources/css/toastr.min.css';

import toastr from 'toastr';
window.toastr = toastr;


import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createPinia } from "pinia";
import { ZiggyVue } from 'ziggy-js';
import { Ziggy } from './ziggy';
import Vue3Toasity from 'vue3-toastify';

import { router } from '@inertiajs/vue3'
import 'vue3-toastify/dist/index.css';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Vue3Toasity,{
                autoClose: 3000,
            })
            .use(createPinia())
            .use(ZiggyVue,Ziggy)

            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});


