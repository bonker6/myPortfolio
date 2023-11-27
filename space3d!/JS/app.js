document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-y: ${(e.clientX - window.innerWidth / 2) * -0.008}deg;
        --move-x: ${(e.clientY - window.innerHeight / 2) * 0.008}deg;
        `
    })
})