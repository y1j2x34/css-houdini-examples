function createDemo(name, title, style){
    return `
    <article class="demo-box">
        <header>
            <h2>${title}</h2>
        </header>
        <aside></aside>
        <section>
            <iframe src="./${name}/index.html" frameborder="0" style="${style || ''}"></iframe>
        </section>
    </article>
    `;
}

document.body.innerHTML += [
    createDemo('circle', 'Simple Circle Demo'),
    createDemo('inputProperties', 'Input Properties Demo', 'height: 500px')
].join('');