import FlowIterator from './flow-iterator';

export default function IteratorClient({flow, step, setStep}) {
  let flowIterator= FlowIterator(flow, step, setStep);

  let buttonPrevEnabled = step === 0 ? 'disabled' : ''
  let buttonNextText = step === flow.length -1 ? 'Submit' : 'Next';

  return (
    <div>
      {flowIterator.currentStep()}
      <button type="submit" onClick={flowIterator.previousStep} disabled={buttonPrevEnabled}>Prev</button>
      <button type="submit" onClick={flowIterator.nextStep}>{buttonNextText}</button>
    </div>
  );
}
