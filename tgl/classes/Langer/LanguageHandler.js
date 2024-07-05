async function LanguageCheck() {
  const data = await InitializeJSONData();
  let lang = sessionStorage.getItem('lang');

  if (lang) {
    const radioButton = document.querySelector(
      'input[name=languageCode][value=' + lang + ']'
    );
    if (radioButton) {
      radioButton.checked = true;
    }
  } else {
    const firstRadioButton = document.querySelector('input[name=languageCode]');
    if (firstRadioButton) {
      firstRadioButton.checked = true;
      lang = firstRadioButton.value;
    }
  }

  if (!lang) {
    console.error('No language selected or available.');
    return;
  }

  $('input[name=languageCode]').change(function () {
    lang = $('input[name=languageCode]:checked').val();
    sessionStorage.setItem('lang', lang);
    UpdateContent(data, lang);
  });

  UpdateContent(data, lang);
}

function UpdateContent(data, lang) {
  if (!data.Lang[lang]) {
    console.error('No data found for lang:', lang);
    return;
  }

  // Update the headers
  $('h1').each(function (index) {
    var originalText = $(this).text().trim();
    $(this).text(data.Lang[lang].Headers[originalText] || originalText);
  });

  // Update the paragraphs
  $('p').each(function (index) {
    var originalText = $(this).text().trim();
    $(this).text(data.Lang[lang].Contents[originalText] || originalText);
  });

  // Update the buttons
  $('button').each(function (index) {
    var originalText = $(this).text().trim();
    $(this).text(data.Lang[lang].Buttons[originalText] || originalText);
  });

  // console.log(data.Lang[lang].Headers.Title1);
}
