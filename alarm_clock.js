var ac = {
  init : function () {
  
    ac.chr = document.getElementById("chr");
    ac.cmin = document.getElementById("cmin");
    ac.csec = document.getElementById("csec");

    ac.thr = ac.createSel(23);
    document.getElementById("tpick-h").appendChild(ac.thr);
    ac.thm = ac.createSel(59);
    document.getElementById("tpick-m").appendChild(ac.thm);
    ac.ths = ac.createSel(59);
    document.getElementById("tpick-s").appendChild(ac.ths);

    ac.tset = document.getElementById("tset");
    ac.tset.addEventListener("click", ac.set);
    ac.treset = document.getElementById("treset");
    ac.treset.addEventListener("click", ac.reset);
    
  }

  tick : function () {

    var now = new Date();
    var hr = ac.padzero(now.getHours());
    var min = ac.padzero(now.getMinutes());
    var sec = ac.padzero(now.getSeconds());

    ac.chr.innerHTML = hr;
    ac.cmin.innerHTML = min;
    ac.csec.innerHTML = sec;


  }
}

