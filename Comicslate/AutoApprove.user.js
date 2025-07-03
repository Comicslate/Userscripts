// ==UserScript==
// @name			Comicslate AutoApprove
// @version			2025.07.03
// @description		Автоодобрение правок
// @match			http*://*comicslate.org/*
// @exclude			http*://*comicslate.org/*do=*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoApprove.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoApprove.user.js
// ==/UserScript==

// Константы для улучшения читаемости кода
const APPROVAL_SELECTOR = '.approval_action a';
const SELF_NAME = 'Rainbow Spike';
const FRIEND_NAME = 'Arkane';
const APPROVAL_LEVEL = 1; // 0 - одобрять всё, 1 - только себя и Аркейна

// Функция для получения текста из элемента
function getTextFromElement(selector, index) {
    const elements = document.querySelectorAll(selector);
    return elements.length > index ? elements[index].innerHTML : '';
}

// Основная логика
const approveLink = document.querySelector(APPROVAL_SELECTOR);

if (approveLink) {
    let shouldApprove = false;

    if (APPROVAL_LEVEL === 0) {
        shouldApprove = true; // Одобряем всё
    } else {
        // Проверяем имя автора
        const authorName = getTextFromElement('.pageinfo bdi', 1);
        const friendName = getTextFromElement('.lang-fr .pageinfo bdi', 1);

        shouldApprove = (authorName === SELF_NAME) || (friendName === FRIEND_NAME);
    }

    if (shouldApprove) {
        approveLink.click();
    }
}
