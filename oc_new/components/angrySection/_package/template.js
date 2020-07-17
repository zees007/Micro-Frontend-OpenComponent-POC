var oc=oc||{};oc.components=oc.components||{};oc.components['53bcef2aaf628d8566ac59b431183fdb300ac10c']=function(model){
  var modelHTML =  model.__html ? model.__html : '';
  var staticPath = model.reactComponent.props._staticPath;
  var props = JSON.stringify(model.reactComponent.props);
  var randomId = Math.random() * 10000000;
  var reactRootId = "oc-reactRoot-angrySection-" + randomId;
  return '<div id="'+ reactRootId +'" class="oc-reactRoot-angrySection">' + modelHTML + '</div>' +
    '<style>.oc__angrySection-styles-css__container__2Rn0yuC8{background-color:red;width:600px;height:120px;padding:1em;color:#fffaf0}.oc__angrySection-styles-css__btn__3Tsp4fZF{width:100%;margin:.5em;padding:.5em;border-radius:5px;display:inline}.oc__angrySection-styles-css__label1__2d3GA1A0 input[type=radio]{width:15px}.oc__angrySection-styles-css__label1__2d3GA1A0 label{display:inline;margin-left:5px}</style>' +
    '<script>' +
    'window.oc = window.oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    'oc.events.fire(\'oc:cssDidMount\', \'.oc__angrySection-styles-css__container__2Rn0yuC8{background-color:red;width:600px;height:120px;padding:1em;color:#fffaf0}.oc__angrySection-styles-css__btn__3Tsp4fZF{width:100%;margin:.5em;padding:.5em;border-radius:5px;display:inline}.oc__angrySection-styles-css__label1__2d3GA1A0 input[type=radio]{width:15px}.oc__angrySection-styles-css__label1__2d3GA1A0 label{display:inline;margin-left:5px}\');' +
      'oc.requireSeries([{"global":["Object","assign"],"url":"https://unpkg.com/es6-object-assign@1.1.0/dist/object-assign-auto.min.js","name":"Object.assign"},{"global":"PropTypes","url":"https://unpkg.com/prop-types@15.7.2/prop-types.min.js","name":"prop-types"},{"global":"React","url":"https://unpkg.com/react@16.9.0/umd/react.production.min.js","name":"react"},{"global":"ReactDOM","url":"https://unpkg.com/react-dom@16.9.0/umd/react-dom.production.min.js","name":"react-dom"}], function(){' +
        'oc.require(' +
          '["oc", "reactComponents", "c7eeb92d0089c11f425e33d847041742d60ffee9"],' + 
          '"' + staticPath + 'react-component.js",' +
          'function(ReactComponent){' +
            'var targetNode = document.getElementById("'+ reactRootId +'");' +
            'targetNode.setAttribute("id","");' +
            'ReactDOM.hydrate(React.createElement(ReactComponent,' +  props + '),targetNode);' +
          '}' +
        ');' +
      '});' +
    '});' +
  '</script>'
}