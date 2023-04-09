let textSelect = triggerGui.getElementsByClassName("textSelect")[0];

getTriggerConfiguration(() => {
  return {
    text: textSelect.value,
    data: textSelect.value,
  };
});

if (triggerPresetData) {
  console.log(triggerPresetData);
  textSelect.value = triggerPresetData;
}
