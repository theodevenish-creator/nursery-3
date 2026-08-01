/* Ashgrove House Nursery — template behaviour.
   Two things only: the mobile menu, and the enquiry form.
   No scroll-triggered animation (see docs/DESIGN-STANDARD.md, fingerprint 9). */

(function () {
  'use strict';

  /* ---------------------------------------------------------------- menu -- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');

  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      menu.hidden = !open;
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close after choosing a destination, and on Escape.
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  /* ---------------------------------------------------------------- form -- */
  /* EDIT: this is a front-end demo. To take real enquiries, either set
     ENDPOINT to a form service / your own handler, or delete this block and
     add `action="..." method="post"` to the <form> in index.html. */
  var ENDPOINT = '';

  var form = document.getElementById('visit-form');
  var status = document.getElementById('form-status');
  if (!form || !status) return;

  var emailLooksValid = function (value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  };

  var flag = function (field, invalid) {
    if (invalid) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.elements.name;
    var email = form.elements.email;

    var nameBad = name.value.trim() === '';
    var emailBad = !emailLooksValid(email.value.trim());

    flag(name, nameBad);
    flag(email, emailBad);

    if (nameBad || emailBad) {
      status.textContent = nameBad
        ? 'Please add your name so we know who to reply to.'
        : 'That email address doesn’t look right. Please check it.';
      (nameBad ? name : email).focus();
      return;
    }

    if (!ENDPOINT) {
      status.textContent = 'Thank you, ' + name.value.trim().split(' ')[0] +
        '. This is a demonstration site, so nothing was sent. On the live site we reply the same working day.';
      form.querySelector('button[type="submit"]').disabled = true;
      return;
    }

    status.textContent = 'Sending…';
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(function (res) {
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.textContent = 'Thank you, we’ll be in touch today.';
      })
      .catch(function () {
        status.textContent = 'Sorry, that didn’t send. Please call us on 01252 496 118.';
      });
  });

  // Clear the flag as soon as the visitor starts fixing it.
  ['name', 'email'].forEach(function (key) {
    var field = form.elements[key];
    if (field) field.addEventListener('input', function () { flag(field, false); });
  });
})();
