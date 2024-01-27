const btnOpenModal = document.querySelector("#btn-open-modal");
const btnCloseModal = document.querySelector("#btn-close-modal");
const modal = document.querySelector("#modal");

btnOpenModal.addEventListener("click", () => {
  modal.showModal();
});

btnCloseModal.addEventListener("click", () => {
  modal.close();
});
