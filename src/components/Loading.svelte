<div class="gooey">
  <span class="dot"></span>
  <div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<style>
 .gooey {
    margin-top: 13rem;
    width: 142px;
    height: 40px;
    filter: contrast(20);
}
.gooey .dot {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 12px;
    left: 15px;
    filter: blur(4px);
    background: var(--smokey-white);
    border-radius: 50%;
    transform: translateX(0);
    animation: dot 2.8s infinite;
}
.gooey .dots {
    transform: translateX(0);
    margin-top: 12px;
    margin-left: 31px;
    animation: dots 2.8s infinite;
}
.gooey .dots span {
    display: block;
    float: left;
    width: 16px;
    height: 16px;
    margin-left: 16px;
    filter: blur(4px);
    background: var(--smokey-white);
    border-radius: 50%;
}
@-moz-keyframes dot {
    50% {
        transform: translateX(96px);
    }
}
@-webkit-keyframes dot {
    50% {
        transform: translateX(96px);
    }
}
@-o-keyframes dot {
    50% {
        transform: translateX(96px);
    }
}
@keyframes dot {
    50% {
        transform: translateX(96px);
    }
}
@-moz-keyframes dots {
    50% {
        transform: translateX(-31px);
    }
}
@-webkit-keyframes dots {
    50% {
        transform: translateX(-31px);
    }
}
@-o-keyframes dots {
    50% {
        transform: translateX(-31px);
    }
}
@keyframes dots {
    50% {
        transform: translateX(-31px);
    }
}
</style>