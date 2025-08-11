export const addAvatarListener = () => {
  const avatarPreview = document.getElementById("avatarPreview");
  const avatarInput = document.getElementById("avatarInput");

  const areAvatarElements =
    avatarInput instanceof HTMLInputElement &&
    avatarPreview instanceof HTMLImageElement;

  if (!areAvatarElements) {
    return;
  }

  avatarInput.onchange = (evt: Event) => {
    const target = evt.target;
    const isTargetElement = target instanceof HTMLInputElement;

    if (!isTargetElement) {
      return;
    }

    const file = target.files?.[0];

    if (file) {
      const objectURL = URL.createObjectURL(file);
      avatarPreview.style.display = "block";
      avatarPreview.src = objectURL;

      avatarPreview.onload = () => {
        URL.revokeObjectURL(objectURL);
      };
    }
  };
};
