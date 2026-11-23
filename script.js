const messages = [
  "you're my favorite <3",
  "i love you sara <3",
  "you mean the world to me",
  "you’re my favorite person in the whole universe",
  "I can’t stop smiling when I think about you",
  "I’m thankful every day to have you",
  "every second with you is a second I adore",
  "I fall for you more every day <3",
  "I cherish you sara",
  "you are the reason my heart beats with so much love",
  "I fall deeper in love with you every single day <3",
  "you’re the one who holds my heart",
  "you’re the sweetest part of my life",
  "you make my heart feel so safe",
  "loving you feels like the easiest thing in the world",
  "you make my days a little brighter just by being you",
  "you have such a special place in my heart",
  "i’m so lucky that i get to love you",
  "you make my heart feel at home",
  "i hope you never doubt how much you mean to me",
  "you’re someone i’ll always be grateful for",
  "i could never get tired of choosing you",
  "you’re one of the best things that ever happened to me",
  "you deserve to be reminded how loved you are",
  "i’ll always have a soft spot for you, sara <3",
  "you make my world feel warmer",
  "i hope you know that you are deeply, endlessly cherished",
  "even on ordinary days, having you makes everything feel special",
  "if i had to choose again, i’d still choose you",
  "i love having you in my life more than words can say",
  "i hope life is always gentle with you, because you deserve it",
  "you’re so easy to love sara <3",
  "somehow, you make my heart feel full just by existing",
  "I love you a lot sara <3",
  "I love you my sanity <3"
];

function generateRandomNotifications() {
  const notificationCount = 35;

  for (let i = 0; i < notificationCount; i++) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification';

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      notification.innerHTML = `
        <div class="notification-header">
          <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
          <span></span>
        </div>
        <p>${randomMessage}</p>
      `;

      const x = Math.random() * (window.innerWidth - 240);
      const y = Math.random() * (window.innerHeight - 160);
      notification.style.left = `${x}px`;
      notification.style.top = `${y}px`;

      document.body.appendChild(notification);
    }, i * 1000);
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.display = 'none'; 
}

document.addEventListener("DOMContentLoaded", function () {
  var encodedText = '&#68;&#101;&#115;&#105;&#103;&#110;&#32;&#98;&#121;&#32;&#80;&#97;&#110;&#98;&#97;&#112;';
  var footer = document.createElement("a");
  footer.innerHTML = encodedText; 
  document.body.appendChild(footer); 
});

