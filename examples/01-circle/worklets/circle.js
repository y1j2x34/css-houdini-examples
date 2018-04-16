class SimplePaintWorklet{
    paint(ctx, size, props){
        ctx.save();
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.translate(50,50);
        ctx.arc(0, 0, 50, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }
}

registerPaint('circle', SimplePaintWorklet);