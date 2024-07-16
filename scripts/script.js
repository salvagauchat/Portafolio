document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profile-image');
    const saludoDiv = document.getElementById('saludo');
    const skillsList = document.getElementById('skills-list');
    const showMoreButton = document.getElementById('show-more-skills');
    const showPeopleButton = document.getElementById('show-people');
    const listaPersonas = document.getElementById('listaPersonas');

    // Verifica la existencia de cada elemento antes de asignar eventos
    if (profileImage) {
        profileImage.addEventListener('click', function() {
            if (profileImage.src.includes('foto-personal.jpeg')) {
                profileImage.src = '/images/gon.jpg';
            } else {
                profileImage.src = '/images/foto-personal.jpeg'; 
            }
        });
    }

    if (saludoDiv) {
        saludoDiv.addEventListener('click', function() {
            if (saludoDiv.textContent.includes('¡Bienvenido a mi portafolio')) {
                saludoDiv.textContent = 'Welcome to my portfolio, it is a pleasure to have you as a visitor!';
            } else {
                saludoDiv.textContent = '¡Bienvenido a mi portafolio, es un placer tenerte como visitante! (click for English)';
            }
        });
    }

    if (showMoreButton && skillsList) {
        showMoreButton.addEventListener('click', function() {
            const moreSkills = ['JavaScript', 'Python', 'SQL', 'Java'];

            moreSkills.forEach(skill => {
                const newSkillItem = document.createElement('li');
                newSkillItem.textContent = skill;
                skillsList.appendChild(newSkillItem);
            });
            showMoreButton.style.display = 'none';
        });
    }

    if (showPeopleButton && listaPersonas) {
        showPeopleButton.addEventListener('click', function() {
            console.log("Botón 'Mostrar Personas' clicado");

            const people = [
                { nombre: 'Carlos', edad: 62, profesion: 'Arquitecto' },
                { nombre: 'Silvia', edad: 67, profesion: 'Topocartógrafa' },
                { nombre: 'Hernán', edad: 35, profesion: 'Doctor en Desarrollo Económico' },
                { nombre: 'Ignacio', edad: 29, profesion: 'Soporte Técnico' },
                { nombre: 'Lucio', edad: 28, profesion: 'Kinesiólogo' },
                { nombre: 'Tomás', edad: 26, profesion: 'Estudiante - Biodiversidad' },
            ];

            people.forEach(person => {
                const newPersonItem = document.createElement('li');
                newPersonItem.textContent = `${person.nombre}, ${person.edad} años -  ${person.profesion}`;
                listaPersonas.appendChild(newPersonItem);
            });

            showPeopleButton.style.display = 'none';
        });
    }
});

