class SimplePaintWorklet {
    paint(ctx, size, props) {
        let r = Math.floor(Math.min(size.width, size.height) / 2);
        ctx.save();
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.translate(size.width / 2, size.height / 2);
        ctx.lineWidth = 0.5;
        ctx.arc(0.5, 0.5, r-1, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }
}

registerPaint('circle', SimplePaintWorklet);
