window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const content_el = document.createElement('div');
        content_el.classList.add('content');

        task_el.appendChild(content_el);

        const input_el = document.createElement('input');
        input_el.classList.add('text');
        input_el.type = 'text';
        input_el.value = task;
        input_el.setAttribute('readonly', 'readonly');

        content_el.appendChild(input_el);


        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');

        const task_edit_button = document.createElement('button');
        task_edit_button.classList.add('edit');
        task_edit_button.innerText = 'Edit';

        const task_delete_button = document.createElement('button');
        task_delete_button.classList.add('delete');
        task_delete_button.innerText = 'Delete';

        task_action_el.appendChild(task_edit_button);
        task_action_el.appendChild(task_delete_button);

        task_el.appendChild(task_action_el);

        list_el.appendChild(task_el);

        input.value = '';

        task_edit_button.addEventListener('click', (e) => {
            if (task_edit_button.innerText.toLowerCase() == 'edit') {
                task_edit_button.innerText = 'Save';
                input_el.removeAttribute('readonly');
                input_el.focus();
            }
            else {
                task_edit_button.innerText = 'Edit';
                input_el.setAttribute('readonly', 'readonly');
            }
        });

        task_delete_button.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });
    });
});