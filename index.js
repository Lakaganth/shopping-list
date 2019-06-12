$(function() {
  //  deleting items

  $(".shopping-list").on("click", `.shopping-item-delete`, handleDeleteTask);

  // Strike through

  $(".shopping-list").on("click", `.shopping-item-toggle`, handleCheckItems);

  // Adding new List item
  $("#js-shopping-list-form").on("submit", handleAddTask);
});

function handleAddTask(e) {
  e.preventDefault();

  const task = $("input#shopping-list-entry").val();
  console.log(task);

  const listItem = `<li>
    <span class="shopping-item">${task}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;

  $(".shopping-list").append(listItem);
}

function handleDeleteTask() {
  console.log(this);

  $(this)
    .closest("li")
    .remove();
}

function handleCheckItems() {
  const strike = $(this).closest("li");

  strike.toggleClass("shopping-item__checked");
}
