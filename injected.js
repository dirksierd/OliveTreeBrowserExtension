// Generated by CoffeeScript 2.3.1
(function() {
  var OliveTreePopover;

  OliveTreePopover = (function() {
    class OliveTreePopover {
      constructor() {
        document.body.addEventListener('mouseover', (evt) => {
          if (evt.target.classList.contains('olivetree-link')) {
            return this.showPopover(evt.target);
          }
        });
        document.body.addEventListener('mouseout', (evt) => {
          if (!evt.target.classList.contains('olivetree-link')) {
            return true;
          }
          return this.hidePopoverTimeout = setTimeout(this.hidePopover, 100);
        });
        this.addLinks();
      }

      addLinks() {
        var body, element, elements, escapedMatch, i, j, len, len1, match, matches, ref, regex, results;
        elements = document.getElementsByTagName('body');
        results = [];
        for (i = 0, len = elements.length; i < len; i++) {
          element = elements[i];
          body = element.innerHTML;
          matches = body.match(this.referenceRegex);
          ref = matches || [];
          for (j = 0, len1 = ref.length; j < len1; j++) {
            match = ref[j];
            escapedMatch = escape(match);
            regex = new RegExp(match, 'g');
            body = body.replace(regex, `<span class="olivetree-link" data-link="olivetree://bible/${escapedMatch}">${match}</span>`);
          }
          results.push(element.innerHTML = body);
        }
        return results;
      }

      hidePopover() {
        var elem, i, len, ref, results;
        ref = document.getElementsByClassName('olivetree-popover');
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          elem = ref[i];
          if (elem == null) {
            continue;
          }
          results.push(elem.remove());
        }
        return results;
      }

      showPopover(target) {
        var popOver;
        popOver = document.createElement('a');
        popOver.className = 'olivetree-popover';
        popOver.href = target.dataset.link;
        popOver.innerHTML = 'Open with OliveTree';
        popOver.addEventListener('mouseover', () => {
          return clearTimeout(this.hidePopoverTimeout);
        });
        popOver.addEventListener('mouseout', this.hidePopover);
        return target.appendChild(popOver);
      }

    };

    OliveTreePopover.prototype.hidePopoverTimeout = null;

    OliveTreePopover.prototype.referenceRegex = /(?![^<]*>)((1 |2 |3 |)(Genesis|Gen|Ge|Gn|Exodus|Ex|Exod|Leviticus|Lev|Le|Lv|Numbers|Num|Nu|Nm|Nb|Deuteronomy|Deut|De|Dt|Joshua|Josh|Jos|Jsh|Judges|Judg|Jdg|Jg|Jdgs|Ruth|Ruth|Rth|Ru|Samuel|Sam|Sm|Sa|S|Kings|Kings|Kgs|Kin|Ki|Chronicles|Chr|Chr|Ch|Ezra|Ezra|Ezr|Ez|Nehemiah|Neh|Ne|Tobit|Tob|Judith|Jdt|Esther|Esth|Est|Es|Maccabees|Macc|Job|Jb|Psalms|Ps|Psalm|Pslm|Psa|Psm|Proverbs|Prov|Pro|Prv|Pr|Ecclesiastes|Eccl|Eccles|Eccle|Ecc|Ec|Song|Canticles|Cant|Wisdom|Wis|Sirach|Sir|Isaiah|Isa|Is|Jeremiah|Jer|Je|Jr|Lamentations|Lam|La|Baruch|Bar|Ezekial|Ezek|Eze|Ezk|Daniel|Dan|Da|Dn|Hosea|Hos|Ho|Joel|Joel|Jl|Amos|Am|Jonah|Jon|Jnh|Micah|Mic|Mc|Nahum|Nah|Na|Habakkuk|Hab|Zephaniah|Zeph|Zep|Zp|Haggai|Hag|Hg|Zechariah|Zech|Zec|Zc|Malachi|Mal|Ml|Matthew|Mt|Matt|Mark|Mk|Mrk|Luke|Lk|Luk|John|Jn|Jhn|Acts|Ac|Romans|Rom|Ro|Rm|Corinthians|Cor|Co|Galatians|Gal|Ga|Ephesians|Eph|Ephes|Philippians|Phil|Php|Pp|Colossians|Col|Thessalonians|Thess|Thes|Th|Timothy|Tim|Ti|Titus|Tit|Ti|Philemon|Philem|Phm|Pm|Hebrews|Heb|James|Jas|Jm|Peter|Pet|Pe|Pt|P|John|Jn|Jhn|J|Jude|Jude|Jud|Jd|Revelation|Rev|Apocalypse|Apoc) [0-9]+((\:|.)[0-9]+)?(-[0-9]+)?)/g;

    return OliveTreePopover;

  }).call(this);

  new OliveTreePopover();

}).call(this);
