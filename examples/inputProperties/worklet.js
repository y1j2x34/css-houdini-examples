class SimplePaintWorklet {
    static get inputProperties(){
        return ['color', '--line-width'];
    }
    paint(ctx, size, props) {
        let r = Math.floor(Math.min(size.width, size.height) / 2);

        let color = props.get('color');
        let lineWidth = props.get('--line-width').value % r;

        ctx.strokeStyle = color || 'black';
        ctx.beginPath();
        ctx.translate(size.width / 2, size.height / 2);
        ctx.lineWidth = lineWidth;
        ctx.arc(0, 0, r-lineWidth/2, 0, Math.PI * 2);
        ctx.stroke();
    }
}

registerPaint('circle', SimplePaintWorklet);
