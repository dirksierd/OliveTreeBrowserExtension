REGEX = /((1 |2 |3 |)(Genesis|Gen|Ge|Gn|Exodus|Ex|Exod|Leviticus|Lev|Le|Lv|Numbers|Num|Nu|Nm|Nb|Deuteronomy|Deut|De|Dt|Joshua|Josh|Jos|Jsh|Judges|Judg|Jdg|Jg|Jdgs|Ruth|Ruth|Rth|Ru|Samuel|Sam|Sm|Sa|S|Kings|Kings|Kgs|Kin|Ki|Chronicles|Chr|Chr|Ch|Ezra|Ezra|Ezr|Ez|Nehemiah|Neh|Ne|Tobit|Tob|Judith|Jdt|Esther|Esth|Est|Es|Maccabees|Macc|Job|Jb|Psalms|Ps|Psalm|Pslm|Psa|Psm|Proverbs|Prov|Pro|Prv|Pr|Ecclesiastes|Eccl|Eccles|Eccle|Ecc|Ec|Song|Canticles|Cant|Wisdom|Wis|Sirach|Sir|Isaiah|Isa|Is|Jeremiah|Jer|Je|Jr|Lamentations|Lam|La|Baruch|Bar|Ezekial|Ezek|Eze|Ezk|Daniel|Dan|Da|Dn|Hosea|Hos|Ho|Joel|Joel|Jl|Amos|Am|Jonah|Jon|Jnh|Micah|Mic|Mc|Nahum|Nah|Na|Habakkuk|Hab|Zephaniah|Zeph|Zep|Zp|Haggai|Hag|Hg|Zechariah|Zech|Zec|Zc|Malachi|Mal|Ml|Matthew|Mt|Matt|Mark|Mk|Mrk|Luke|Lk|Luk|John|Jn|Jhn|Acts|Ac|Romans|Rom|Ro|Rm|Corinthians|Cor|Co|Galatians|Gal|Ga|Ephesians|Eph|Ephes|Philippians|Phil|Php|Pp|Colossians|Col|Thessalonians|Thess|Thes|Th|Timothy|Tim|Ti|Titus|Tit|Ti|Philemon|Philem|Phm|Pm|Hebrews|Heb|James|Jas|Jm|Peter|Pet|Pe|Pt|P|John|Jn|Jhn|J|Jude|Jude|Jud|Jd|Revelation|Rev|Apocalypse|Apoc) [0-9]+((\:|.)[0-9]+)?(-[0-9]+)?)/g

addLinks = ->
  elements = document.getElementsByTagName('body')
  for element in elements
    body = element.innerHTML
    matches = body.match(REGEX);
    for match in (matches || [])
      escapedMatch = escape(match)
      regex = new RegExp(match, 'g')
      body = body.replace(regex, "<span class=\"olivetree-link\" data-link=\"olivetree://bible/#{escapedMatch}\">#{match}</span>")
    element.innerHTML = body
  true

hidePopoverTimeout = null

hidePopover = ->
  for elem in document.getElementsByClassName('olivetree-popover')
    continue unless elem?
    elem.remove()
  true

showPopover = (target) ->
  popOver = document.createElement('a')
  popOver.className = 'olivetree-popover'
  popOver.href = target.dataset.link
  popOver.innerHTML = 'Open with OliveTree'
  popOver.addEventListener 'mouseover', -> clearTimeout(hidePopoverTimeout)
  popOver.addEventListener 'mouseout', hidePopover
  target.appendChild(popOver)

document.body.addEventListener 'mouseover', (evt) ->
  showPopover(evt.target) if evt.target.classList.contains('olivetree-link')

document.body.addEventListener 'mouseout', (evt) ->
  return true unless evt.target.classList.contains('olivetree-link')
  hidePopoverTimeout = setTimeout(hidePopover, 100)

addLinks()