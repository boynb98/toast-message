const toast = {
    config: {
        duration: 3000
    },


    success: (message = '', title = '', duration) => {
        return toast.create(
            title,
            message,
            'success',
            duration ? duration : toast.config.duration
            
        );
    },

    info: (message = '', title = '', duration) => {
        return toast.create(
            title,
            message,
            'info',
            duration ? duration : toast.config.duration
        );
    },

    warning: (message = '', title = '', duration) => {
        return toast.create(
            title,
            message,
            'warning',
            duration ? duration : toast.config.duration
        );
    },

    error: (message = '', title = '', duration) => {
        return toast.create(
            title,
            message,
            'error',
            duration ? duration : toast.config.duration
        );
    },

    create: (
        title,
        message,
        type,
        duration
    ) => {
        let main = document.getElementById('toast');
        const icons = {
            success: 'fa-check-circle',
            info: 'fa-info-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-exclamation-triangle'
        }
        const icon = icons[type];
        if(!main){
            main = document.createElement('div');
            main.setAttribute('id', 'toast');
            document.querySelector('body').appendChild(main)
        }
        const delay = (duration / 1000).toFixed(2);
        const delayRemove = duration + 1000;
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `toastInLeft ease .3s, toastFadeOut linear 1s ${delay}s forwards`;

        const autoRemoveToast = setTimeout(() => {
            main.removeChild(toast);
        }, delayRemove);

        
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemoveToast);
            }
        }

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="fas ${icon}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__title">${title}</div>
                <div class="toast__message">${message}</div>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast);
    }
}