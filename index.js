function baz(btnNo){
  if (btnNo == 1){
    link = "Amazon";
    href = "https://www.amazon.co.jp/Logicool-%E3%83%AD%E3%82%B8%E3%82%AF%E3%83%BC%E3%83%AB-HERO-%E3%82%B2%E3%83%BC%E3%83%9F%E3%83%B3%E3%82%B0-G-PPD-001r/dp/B07GPZC1DT/ref=sr_1_11_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=logi+gpro&qid=1588497991&sr=8-11-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVFlIV003RFpUR0dEJmVuY3J5cHRlZElkPUEwNTI5MDQ3M1BBT0VCQ1dBSEZNWiZlbmNyeXB0ZWRBZElkPUExRkVBTDdVNVc3VDJJJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==";

  }


  if(btnNo ==2){
    link="Amazon";
    href="https://www.amazon.co.jp/%E3%82%B2%E3%83%BC%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%9E%E3%82%A6%E3%82%B9-Zowie-FK2-%E4%B8%AD%E3%82%B5%E3%82%A4%E3%82%BA%E4%B8%A1%E6%89%8B%E6%8C%81%E3%81%A1%E5%B0%82%E7%94%A8-%E3%83%97%E3%83%AC%E3%82%A4%E8%A8%AD%E8%A8%88/dp/B01LAGHGRM/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%EF%BD%86%EF%BD%8B%EF%BC%92&qid=1588512557&sr=8-1";
  }


  if(btnNo ==3){
    link="Amazon";
    href="https://www.amazon.co.jp/Logicool-%E3%83%AD%E3%82%B8%E3%82%AF%E3%83%BC%E3%83%AB-LIGHTSPEED-%E3%83%AF%E3%82%A4%E3%83%A4%E3%83%AC%E3%82%B9-G-PPD-002WL/dp/B07GPJXVQG/ref=sr_1_5?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=logi+gpro&qid=1588497991&sr=8-5";
  
  }


  if(btnNo ==4){
    link="Amazon";
    href="https://www.amazon.co.jp/Finalmouse-Ultralight-Cape-Town-%E3%82%B2%E3%83%BC%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%9E%E3%82%A6%E3%82%B9/dp/B07KXVR236/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=finalmouse&qid=1588512708&sr=8-1";
  }

  ret = confirm(link + "へ飛びます。宜しいですか？");
  if (ret == true){
    location.href = href;
  }
}










