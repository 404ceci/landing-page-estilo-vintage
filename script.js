// ── Scroll-triggered fade-in para cards de produto e depoimentos ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

window.addEventListener('load', () => {
  document.querySelectorAll('.product-card, .testimonial-card').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
});

document.querySelectorAll('.product-card, .testimonial-card').forEach((el, i) => {
  el.style.opacity = '0.3';
  el.style.transform = 'translateY(28px)';
  el.style.transition = `opacity .55s ease ${i * 0.08}s, transform .55s ease ${i * 0.08}s`;
  observer.observe(el);
});



// ── Dots de navegação dos depoimentos ──
document.querySelectorAll('.nav-dot').forEach((dot) => {
  dot.addEventListener('click', () => {
    document.querySelectorAll('.nav-dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

// ── Micro-interação do botão "Adicionar ao Carrinho" ──
document.querySelectorAll('.btn-add-cart').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.textContent = '✓ Adicionado!';
    btn.style.background = '#7B2D3E';
    btn.style.color = 'white';
    setTimeout(() => {
      btn.textContent = '+ Carrinho';
      btn.style.background = '';
      btn.style.color = '';
    }, 1800);
  });
});

// ── Sombra da navbar apenas após scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 10) {
    nav.classList.add('scroll-shadow');
  } else {
    nav.classList.remove('scroll-shadow');
  }
});

// ── Efeito 3D parallax no hover da imagem do lookbook ──
const lookbookImg = document.querySelector('.lookbook-image img');

if (lookbookImg) {
  const wrapper = lookbookImg.closest('.lookbook-image');

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;   // 0 a 1
    const y = (e.clientY - rect.top) / rect.height;    // 0 a 1

    const rotateX = (y - 0.5) * -10;  // -5deg a +5deg
    const rotateY = (x - 0.5) * 10;

    lookbookImg.style.transform = `scale(1.04) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    lookbookImg.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
  });
}
