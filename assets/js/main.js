// Window system
let isDragging = false;
let initialX;
let initialY;
let currentWindow;

document.querySelectorAll('.window').forEach(windowElement => {
    windowElement.addEventListener('mousedown', (e) => {
        isDragging = true;
        currentWindow = windowElement;
        initialX = e.clientX - currentWindow.getBoundingClientRect().left;
        initialY = e.clientY - currentWindow.getBoundingClientRect().top;
        currentWindow.classList.add('dragging');

        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', () => {
            isDragging = false;
            currentWindow.classList.remove('dragging');
            document.removeEventListener('mousemove', handleDrag);
        });
    });
});

function handleDrag(e) {
    if (isDragging && currentWindow) {
        const newX = e.clientX - initialX;
        const newY = e.clientY - initialY;
        currentWindow.style.left = `${newX}px`;
        currentWindow.style.top = `${newY}px`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let linksWindow = document.getElementById('links');
    let myProjectsLink = document.getElementById('navprojects');

    myProjectsLink.addEventListener('click', function(event) {
        event.preventDefault();
        linksWindow.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let linksWindow = document.getElementById('terminal');
    let myProjectsLink = document.getElementById('neofetchshow');

    myProjectsLink.addEventListener('click', function(event) {
        event.preventDefault();
        linksWindow.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let linksWindow = document.getElementById('rpc');
    let myProjectsLink = document.getElementById('rpcshow');

    myProjectsLink.addEventListener('click', function(event) {
        event.preventDefault();
        linksWindow.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let linksWindow = document.getElementById('skills');
    let myProjectsLink = document.getElementById('skillsshow');

    myProjectsLink.addEventListener('click', function(event) {
        event.preventDefault();
        linksWindow.style.display = 'block';
    });
});

function hideWindow(windowId) {
    let windowElement = document.getElementById(windowId);
    if (windowElement) {
        windowElement.style.display = 'none';
    }
}

// Github API
async function fetchRepos() {
    const response = await fetch(`https://api.github.com/users/riviox/repos`);
    const data = await response.json();
    return data;
}

async function displayRepos() {
    const repos = await fetchRepos();
    const linksContainer = document.getElementById('repos');
    const projectsList = document.createElement('ul');
    projectsList.innerHTML = '<h2>My Repos:</h2>';

    repos.forEach(repo => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = repo.html_url;
        link.textContent = repo.name;
        listItem.appendChild(link);
        projectsList.appendChild(listItem);
    });

    linksContainer.appendChild(projectsList);
}

document.addEventListener('DOMContentLoaded', displayRepos);