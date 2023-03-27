let textSelect = triggerGui.getElementsByClassName("textSelect")[0];

getTriggerConfiguration(() => {
  return {
    text: textSelect.value,
    data: textSelect.value,
  };
});
