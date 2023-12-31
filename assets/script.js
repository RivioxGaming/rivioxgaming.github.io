async function fetchPinnedRepositories(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
    
    if (!response.ok) {
        throw new Error(`Failed to fetch GitHub data: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
        throw new Error(`Invalid GitHub API response: ${JSON.stringify(data)}`);
    }

    return data;
}

async function loadProjects() {
    const username = "riviox";
    const projectsList = document.getElementById("projects-list");
    
    try {
        const repositories = await fetchPinnedRepositories(username);

        repositories.slice(0, 5).forEach((repo) => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = repo.html_url;
            link.target = "_blank";
            link.textContent = repo.name;
            listItem.appendChild(link);
            projectsList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
    }
}

document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

(async () => {
    await loadLinksPreset(tsParticles);
    await tsParticles.load({ id: "tsparticles", options: { preset: "links" } });
    await loadProjects();
})();

async function fetchDiscordInfo() {
    const discordApiUrl = 'https://discordlookup.mesavirep.xyz/v1/user/1183356609448124489';

    try {
        const response = await fetch(discordApiUrl);
        const data = await response.json();

        // Update HTML content with Discord information
        document.getElementById('discord-tag').innerText = `${data.tag}`;
        document.getElementById('discord-avatar').src = data.avatar.link;
        document.getElementById('discord-banner').src = data.banner.link;
    } catch (error) {
        console.error('Error fetching Discord data:', error);
    }
}

fetchDiscordInfo();