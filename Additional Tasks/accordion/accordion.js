'use strict';

/**
 * <div class="accordion">
        <div class="head">
            <span>Scalable Vector Graphics</span>
            <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
        </div>
        <div class="extra">
            <p>Scalable Vector Graphics .....</p>
        </div>
    </div>
 */


/**
 * 1. Get all articles from URL
 * 2. Display all articles on the screen
 * 3. On individual article click the "More" -> get that article's information
 * 4. Display that article's information on the screen
 * 5. Clicking "Less" button should hide the article's information
 */
(async function () {
    function renderToggleArticleButton(article, articleContentEl) {
        const toggleButton = document.createElement('button');

        toggleButton.classList.add('button');
        toggleButton.setAttribute('id', article._id);
        toggleButton.innerHTML = 'More';
        
        toggleButton.addEventListener('click', () => {
            toggleButton.innerHTML = articleContentEl.classList.contains('hidden') ? 'Less' : 'More';
            toggleArticleContent(article._id, articleContentEl);
        });

        return toggleButton;
    }

    function renderSingleArticle(article, container) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('accordion');

        const head = document.createElement('div');
        head.classList.add('head');
        
        const titleElement = document.createElement('span');
        titleElement.innerHTML = article.title;

        const articleContent = document.createElement('div');
        articleContent.classList.add('hidden');

        const toggleButton = renderToggleArticleButton(article, articleContent);

        head.appendChild(titleElement);
        head.appendChild(toggleButton);

        wrapper.appendChild(head);
        wrapper.appendChild(articleContent);

        container.appendChild(wrapper);
    }

    function renderArticles(articles, container) {
        articles.forEach(article => renderSingleArticle(article, container));
    }

    async function getArticles() {
        const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

        const response = await fetch(url);

        const data = await response.json();

        return data;
    }

    async function getSingleArticle(id) {
        const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

        const response = await fetch(url);
        const data = await response.json();

        return data;
    }

    function getElements() {
        const main = document.getElementById('main');

        return {
            main,
        };
    }

    function renderArticlesLoadingIndicator(container) {
        const div = document.createElement('div');

        div.setAttribute('id', 'loading');
        div.innerHTML = 'Loading articles...';

        container.appendChild(div);
    }

    function removeArticlesLoadingIndicator() {
        const div = document.getElementById('loading');

        div.remove();
    }

    async function toggleArticleContent(articleId, container) {
        const article = await getSingleArticle(articleId);

        container.classList.toggle('hidden');
        container.innerHTML = article.content;
    }

    document.addEventListener('DOMContentLoaded', async () => {
        const elements = getElements();

        renderArticlesLoadingIndicator(elements.main);

        const articles = await getArticles();

        removeArticlesLoadingIndicator();

        renderArticles(articles, elements.main);
    });
}());