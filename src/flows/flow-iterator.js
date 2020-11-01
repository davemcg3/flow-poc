export default function FlowIterator(flowSteps, currentStep, setStep) {
  return {
    currentStep: function () {
      return flowSteps[currentStep]();
    },

    nextStep: function () {
      if (currentStep + 1 === flowSteps.length) {
        return;
      }

      setStep(currentStep + 1);
    },

    previousStep: function () {
      if (currentStep === 0) {
        return;
      }

      setStep(currentStep - 1);
    }
  }
}
