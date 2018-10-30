export default cb => {
  let midi = null;

  function onMIDISuccess( midiAccess ) {
    console.log( "MIDI ready!" );
    midi = midiAccess;  
    listInputsAndOutputs(midi)
  }
  
  function onMIDIFailure(msg) {
    console.log( "Failed to get MIDI access - " + msg );
  }
  
  navigator.requestMIDIAccess().then( onMIDISuccess, onMIDIFailure );
  
  function listInputsAndOutputs( midiAccess ) {
    for (var entry of midiAccess.inputs) {
      var input = entry[1];
      console.log( "Input port [type:'" + input.type + "'] id:'" + input.id +
        "' manufacturer:'" + input.manufacturer + "' name:'" + input.name +
        "' version:'" + input.version + "'" );
        startLoggingMIDIInput(midi)
    }
    for (var entry of midiAccess.outputs) {
      var output = entry[1];
      console.log( "Output port [type:'" + output.type + "'] id:'" + output.id +
        "' manufacturer:'" + output.manufacturer + "' name:'" + output.name +
        "' version:'" + output.version + "'" );
    }
  }
  
  function onMIDIMessage( event ) {
    var str = "MIDI message received at timestamp " + event.timestamp + "[" + event.data.length + " bytes]: ";
    var color = 'rgb(';
    const Event = event.data;
    for (var i = 0; i<Event.length; i++) {
      color += `${Event[i]},`
      str += "0x" + Event[i].toString(16) + " ";
    }
    console.log( `%c ${str}`, `color: ${color.slice(0, color.length-1)+')'}`);
    cb(Event);
  }
  
  function startLoggingMIDIInput( midiAccess ) {
    midiAccess.inputs.forEach( function(entry) {entry.onmidimessage = onMIDIMessage;});
  }
  
}