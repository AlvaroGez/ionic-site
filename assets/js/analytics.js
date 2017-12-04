(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-44023830-1', 'ionicframework.com');

// Google Optimize
ga('require', 'GTM-WKQJ324');

ga('create', 'UA-77242104-1', 'auto');

if (window.experiment) {
  ga('set', 'expId', window.experiment.id);
  ga('set', 'expVar', window.experiment.variant);
}

ga('require', 'Clearbit', {"mapping":{
  "companyName":"dimension1",
  "companyDomain":"dimension2",
  "companyTags":"dimension3",
  "companySector":"dimension4",
  "companyIndustryGroup":"dimension5",
  "companyIndustry":"dimension6",
  "companySubIndustry":"dimension7",
  "companyType":"dimension8",
  "companyEmployeesRange":"dimension9",
  "companyAlexaRank":"dimension10",
  "companyCity":"dimension11",
  "companyState":"dimension12",
  "companyCountry":"dimension13",
  "companyFunding":"dimension14",
  "companyTech":"dimension15"
}});

// Universal ID
ga('create', 'UA-44023830-23', 'auto', {'allowLinker': true}, 'universalID');
ga('require', 'linker');
ga('linker:autoLink', ['ionic.io','blog.ionic.io','apps.ionic.io',
   'creator.ionic.io','ideas.ionic.io','showcase.ionic.io','market.ionic.io']);
ga('send', 'pageview');


// shorthand global analytics click event helper
window.c = function(cat, lbl, el, val) {
  if (typeof val === 'undefined') {
    var val = null;
  }
  ga('send', {
    hitType: 'event',
    eventCategory: cat,
    eventAction: 'Click',
    eventLabel: lbl,
    eventValue: val,
    hitCallback: function() {
      if (!!el) {
        console.log(!!el, el)
        //document.location = el.href;
      };
    }
  });
  // don't follow links until analytics is recieved
  if (!!el) {
    return false;
  }
};
