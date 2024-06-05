const copy = document.querySelectorAll('#link-action');

copy.forEach((action) => {
    action.addEventListener('click', (e) => {
        e.preventDefault();
        const url = action.parentElement.getAttribute("href");
        navigator.clipboard.writeText(url);
        document.getElementById('toast').innerHTML = `
                                                    <div class="toast-container">
                                                        <p>✅Link berhasil disalin bub!!</p>
                                                     </div>
    `;
    setTimeout(() => {
        document.querySelector('#toast .toast-container').classList.add('toast-done')
    }, 200);

    setTimeout(() => {
        document.querySelector('#toast .toast-container').remove()
    }, 3000)
    })
})

document.addEventListener('scroll', (e) => {
    document.querySelector('.bg-text').style.transform = `translateX(${window.scrollY / 3}px)`
})