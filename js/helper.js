export function checkIfNumber(t){return NaN==t||0==t?(alert("Invalid Input"),!1):!(t<0)||(alert("No of people can't be negetive"),!1)}export function hideDisplayBox(t,e){displayUpdate("none",t,"display"),displayUpdate(1,e,"opacity")}export function showDisplayBox(t,e){displayUpdate("block",t,"display"),displayUpdate(.2,e,"opacity")}function displayUpdate(t,e,n){e.style[n]=t}export function alertPopUpBoxStyleUpdate(t,e,n,i,l){let p=window.innerHeight,r=window.innerWidth;t.style.width=r/e+"px",t.style.height=p/n+"px",t.style.top=p/i+"px",t.style.left=r/l+"px"}export function assignFormValueToObj(t,e,n,i){for(let l in e){let p=e[l],r=p-i;if(r>0)for(let a in n)if(null==t[a]&&(t[a]=[]),l!=a){let n=e[a];if(n<i){let s=i-n;if(r==s){e[l]=i,e[a]=i,t[a].push([l,s]);break}if(!(r>s)){e[a]=n+r,e[l]=i,t[a].push([l,r]);break}r=p-s,e[l]=p-s,e[a]=i,t[a].push([l,s])}}}}export function sortObj(t){return Object.fromEntries(Object.entries(t).sort((([,t],[,e])=>t-e)))}export function deSortObj(t){return Object.fromEntries(Object.entries(t).sort((([,t],[,e])=>e-t)))}export function formPopUp(t){let e=createEl("form");setAt(e,"id","form");for(let n=0;n<t;n++){let t=createEl("div");setAt(t,"class","divLavel");let i=inputLavel("idDiv"+n,"nameLabel","Enter User Detail "+(n+1)),l=inputElementWithClass("div","personDetails"),p=inputNameInForm(n),r=createEl("div"),a=inputPriceElement(n+"idnoP","Please enter Price?");r.append(a);let s=inputButton("addPriceExtra","+"),o=1;s.addEventListener("click",(()=>{let t=inputPriceElement(n+1+"extraIdnoP","Extra price "+o+++"? ");r.append(t)})),l.append(p,r,s),t.append(i,l),e.append(t)}let n=inputElementWithClass("div","buttonSubmitDiv"),i=inputButton("formSubmit","Proceed");return setAt(i,"type","submit"),n.append(i),e.append(n),e}export function inputElementWithClass(t,e){let n=createEl(t);return setAt(n,"class",e),n}export function inputButton(t,e){let n=createEl("button");return setAt(n,"class",t),n.innerText=e,n}export function inputNameInForm(t){let e=createEl("input");return setAt(e,"id",t+"idno"),setAt(e,"placeHolder","Please enter name?"),setAt(e,"class","inputDataFromUser"),e.required=!0,e}export function inputPriceElement(t,e){let n=createEl("input");return setAt(n,"id",t),setAt(n,"placeHolder",e),setAt(n,"class","inputDataFromUser"),n.required=!0,n}export function inputLavel(t,e,n){let i=createEl("label");return setAt(i,"for",t),setAt(i,"class",e),i.innerText=n,i}export function setAt(t,e,n){t.setAttribute(e,n)}export function createEl(t){return document.createElement(t)}export function outputResult(t,e,n){let i=document.getElementById("outDiv");i.style.display="block";let l=inputElementWithClass("div","resultTitle");setAt(l,"id","resultTitle");let p=inputElementWithClass("span","resultSpan");p.innerText="Calculated Result",l.append(p);let r=inputElementWithClass("div","perPersonDiv"),a=inputElementWithClass("span","perPersonDivSpan");a.innerText="Per person amount: "+e,r.append(a);let s=inputElementWithClass("div","totalDiv"),o=inputElementWithClass("span","totalDivSpan");o.innerText="Total amount spend: "+n,s.append(o);let u=inputElementWithClass("div","result");setAt(u,"id","result");for(let e in t)if(t[e].length>0){let n=inputElementWithClass("div","mainDivResult"),i=inputElementWithClass("span","spanTxtFromName");i.innerText=e;let l=t[e],p=inputElementWithClass("div","personToPayList");l.forEach((t=>{let e=inputElementWithClass("div","perpersonNameToPay"),n=inputElementWithClass("span","spanTxtResultName");n.innerText=t[0];let i=inputElementWithClass("span","spanTxtResultPrice");i.innerText=Math.ceil(t[1]),e.append(n,i),p.append(e)})),n.append(i,p),u.append(n)}i.append(l,s,r,u)}