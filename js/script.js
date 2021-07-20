function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null){
    let delay = 500;//задержка
    let body=document.querySelector("body");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", (e) => {
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
    });
};
function menu_close(){
    let iconMenu = document.querySelector(".icon-menu");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
}

const langArr = {
    "unit" : {
        "ru": "сайт",
        "en": "site",
    },
    "header__logo": {
        "ru": "Aлександр Гужвин",
        "en": "Alexander Guzhvin",
    },
    "menu__link-1": {
        "ru": "обо мне",
        "en": "about",
    },
    "menu__link-3": {
        "ru": "навыки",
        "en": "skills",
    },
    "menu__link-4": {
        "ru": "портфолио",
        "en": "portfolio",
    },
    "menu__link-5": {
        "ru": "контакты",
        "en": "contact",
    },
    

    "about__title": {
        "ru": "Aлександр <span>Гужвин<span>",
        "en": "Alexander Guzhvin",
    },
    "about__text-1": {
        "ru": "Привет, я Aлександр занимаюсь разработкой сайтов. Создаю только одностраничные сайты, потому что они позволяют презентовать вашу компанию в сети и найти ваших клиентов в интернете.",
        "en": "Hi, I am Alexander, I am engaged in website development. I create only one-page sites, because they allow you to present your company on the Internet and find your customers on the Internet.",
    },
    "about__text-2": {
        "ru": "Разработаю для вас веб-сайт так что после меня не придётся его переделывать. ",
        "en": "I will develop a website for you so that after I do not have to redo it.",
    },
    "about__text-3": {
        "ru": "Мой конёк — это выполнение заказов в определённые сроки, что доказывают люди работавшие со мной, посмотреть отзывы и работы можно в instagram ",
        "en": "My strong point is the fulfillment of orders within a certain time frame, which is proved by the people who worked with me, you can see the reviews and works on instagram",
    },
    "about__text-4": {
        "ru": "Если вы заинтересовались, то можете написать мне одним из удобных вами способов, и я посчитаю стоимость вашего проекта за 15 минут.",
        "en": "If you are interested, you can write to me in one of the ways convenient for you, and I will calculate the cost of your project in 15 minutes.",
    },
    "about__btn1": {
        "ru": "написать сообщение в ",
        "en": "to write a message",
    },
    "about__btn2": {
        "ru": "написать сообщение в ",
        "en": "to write a message",
    },

    
    "intersts__title": {
        "ru": "Интересы",
        "en": "Intersts",
    },
    "intersts__text-1": {
        "ru": "Помимо того, что я веб-разработчик, мне нравится проводить большую часть времени на открытом воздухе. Зимой я заядлый лыжник и начинающий ледолаз. В теплые месяцы я люблю кататься на горных велосипедах, скалолазание и кататься на каяках.",
        "en": "Besides being a web developer, I enjoy spending most of my time outdoors. In winter I am an avid skier and beginner ice climber. During the warmer months I love mountain biking, rock climbing and kayaking.",
    },
    "intersts__text-2": {
        "ru": "Когда меня заставляют в помещении, я слежу за несколькими фильмами и телешоу в жанрах научной фантастики и фэнтези, я начинающий шеф-повар и провожу большую часть своего свободного времени, изучая и исследуя последние технологические достижения в мире веб-разработки. Ведь Роберт Шуман говорил (Нет конца учению.)",
        "en": "When I am forced indoors, I follow several science fiction and fantasy movies and TV shows, I am an aspiring chef and spend most of my free time researching and researching the latest technological advances in the world of web development. After all, Robert Schumann said (There is no end to learning.)",
    },
    "intersts__text-3": {
        "ru": "Eсли хотите понаблюдать как я провожу своё свободное время, переходите в инстаграм",
        "en": "If you want to watch how I spend my free time, go to Instagram",
    },
    


    "skills__title": {
        "ru": "Навыки",
        "en": "Skills",
    },
    "item-skill__text-1": {
        "ru": "уверенный пользователь",
        "en": "confident user",
    },
    "item-skill__text-2": {
        "ru": "средний уровень",
        "en": "average level",
    },
    "item-skill__text-4": {
        "ru": "уверенный пользователь",
        "en": "average level",
    },
    "item-skill__text-5": {
        "ru": "уверенный пользователь",
        "en": "confident user",
    },
    "item-skill__text-6": {
        "ru": "средний уровень",
        "en": "average level",
    },
    "item-skill__text-7": {
        "ru": "уверенный пользователь",
        "en": "confident user",
    },
    "item-skill__text-8": {
        "ru": "уверенный пользователь",
        "en": "confident user",
    },
    "item-skill__text-9": {
        "ru": "уверенный пользователь",
        "en": "confident user",
    },
    

    "portfolio__title": {
        "ru": "Портфолио",
        "en": "Portfolio",
    },
    "portfolio__btn": {
        "ru": "показать больше",
        "en": "Portfolio",
    },

    "contact__title": {
        "ru": "Контакты",
        "en": "Contact",
    },
    "contact__text": {
        "ru": "Если вы заинтересовались, то можете написать мне одним из удобных вами способов, и я посчитаю стоимость вашего проекта за 15 минут.",
        "en": "If you are interested, you can write to me in one of the ways convenient for you, and I will calculate the cost of your project in 15 minutes.",
    },
    "contact__btn1": {
        "ru": "написать сообщение в ",
        "en": "to write a message",
    },
    "contact__btn2": {
        "ru": "написать сообщение в ",
        "en": "to write a message",
    },
}//обязателен порядок
const select = document.querySelector("select");
const allLing = ['en', 'ru'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage(){
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLanguage(){
	let hash = window.location.hash;
	hash = hash.substr(1)
	console.log(hash);
	if (!allLing.includes(hash)){
		location.href = window.location.pathname + '#ru';
		location.reload();
	}
	select.value = hash;
    for (let key in langArr){
        let elemm = document.querySelector('.lng-' + key);
        if(elemm){
            elemm.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();
//обязателен порядок



// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			let iconMenu = document.querySelector(".icon-menu");
			let menuBody = document.querySelector(".menu__body");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			window.scrollTo({
				
				top: gotoBlockValue,
				behavior: "smooth"
			});
			
			e.preventDefault();
			
		}
	}
}


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_show');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_show');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}