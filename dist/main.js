(()=>{"use strict";function e(e,t,n,d,o,i){this.title=e,this.description=t,this.dueDate=n,this.priority=d,this.notes=o,this.checklist=i}e.prototype.changePriority=(e,t)=>{e.innerHTML=t,(void 0).priority=t,console.log((void 0).priority)},e.prototype.changeCompletionBtn=e=>{e.innerHTML="Completed",(void 0).checklist="Completed",console.log((void 0).checklist)};const t=e,n=document.getElementById("content"),d=e=>{const t=document.createElement("div");t.classList.add("todo-wrap"),t.id="todo-wrap";const d=(e,t)=>{const n=document.createElement("div");n.classList.add("todo-items");const d=document.createElement("h3");d.classList.add("todo-title"),d.textContent=t.title;const o=document.createElement("p");o.classList.add("todo-desc"),o.textContent=t.description;const i=document.createElement("p");i.classList.add("todo-date"),i.textContent=t.dueDate;const c=document.createElement("p");c.classList.add("todo-notes"),c.textContent=t.notes;const a=document.createElement("div");a.classList.add("todo-priority"),a.textContent=t.priority;const l=document.createElement("div");l.classList.add("priority-container");const p=document.createElement("button");p.innerHTML="Change to high",p.classList.add("high-priority"),p.addEventListener("click",(()=>{t.changePriority(a,"Urgent")}));const s=document.createElement("button");s.innerHTML="Change to Medium",s.classList.add("medium-priority"),s.addEventListener("click",(()=>{t.changePriority(a,"Important")}));const r=document.createElement("button");r.innerHTML="Change to Low",r.classList.add("high-priority"),r.addEventListener("click",(()=>{t.changePriority(a,"Normal")})),l.appendChild(p),l.appendChild(s),l.appendChild(r);const m=document.createElement("div");m.classList.add("todo-checklist"),m.textContent=t.checklist;const h=document.createElement("button");h.innerHTML="Mark as competed",h.classList.add("change-completion"),h.addEventListener("click",(()=>{t.changeCompletionBtn(m)})),n.appendChild(d),n.appendChild(o),n.appendChild(i),n.appendChild(c),n.appendChild(a),n.appendChild(l),n.appendChild(m),n.appendChild(h),e.appendChild(n)};for(let n=0;n<e.length;n+=1)d(t,e[n]);n.appendChild(t)},o=[{title:"Todo One",description:"Todo is about food",dueDate:"23/03/2010",notes:"this is a todo note",priority:"Urgent",checklist:"checked"}];d(o),(e=>{const o=document.createElement("div");n.appendChild(o),o.classList.add("form-container");const i=document.createElement("form");i.classList.add("list-form"),o.appendChild(i);const c=document.createElement("input");c.placeholder="Enter Title",i.appendChild(c);const a=document.createElement("input");a.placeholder="Enter Description",i.appendChild(a);const l=document.createElement("input");l.type="date",l.placeholder="Enter Description",i.appendChild(l);const p=document.createElement("label");p.textContent="Urgent",i.appendChild(p);const s=document.createElement("input");s.type="radio",s.name="priority",s.value="high",i.appendChild(s);const r=document.createElement("label");r.textContent="important",i.appendChild(r);const m=document.createElement("input");m.type="radio",m.name="priority",m.value="medium",i.appendChild(m);const h=document.createElement("label");h.textContent="normal",i.appendChild(h);const u=document.createElement("input");u.type="radio",u.name="priority",u.value="low",i.appendChild(u);const C=document.createElement("input");C.placeholder="Add Note",i.appendChild(C);const E=document.createElement("label");E.textContent="Completed",i.appendChild(E);const L=document.createElement("input");L.type="checkbox",i.appendChild(L);const y=document.createElement("button");y.type="button",y.textContent="add",y.addEventListener("click",(()=>{e.push(new t(c.value,a.value,l.value,!0===s.checked?s.value:!0===m.checked?m.value:u.value,C.value,!0===L.checked?"completed":"pending")),document.getElementById("todo-wrap").innerHTML="",d(e)})),i.appendChild(y)})(o)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9uZXdUb2RvLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUb2RvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsIm5vdGVzIiwiY2hlY2tsaXN0IiwidGhpcyIsInByb3RvdHlwZSIsImNoYW5nZVByaW9yaXR5IiwidGFyZ2V0IiwidGV4dCIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VDb21wbGV0aW9uQnRuIiwiYm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwbGF5VG9kb0l0ZW1zIiwiYXJyIiwidG9kb1dyYXAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJ0b2RvSXRlbU1ha2VyIiwicGFyZW50Iiwib2JqIiwidG9kb0l0ZW0iLCJ0b2RvVGl0bGUiLCJ0ZXh0Q29udGVudCIsInRvZG9EZXNjIiwidG9kb0R1ZURhdGUiLCJ0b2RvTm90ZXMiLCJ0b2RvUHJpb3JpdHkiLCJwcmlvcml0eUNvbnRhaW5lciIsImhpZ2hQcmlvcml0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZWRpdW1Qcmlvcml0eSIsIm5vcm1hbFByaW9yaXR5IiwiYXBwZW5kQ2hpbGQiLCJ0b2RvQ2hlY2tMaXN0IiwiY2hhbmdlY29tcGxldGlvbiIsImkiLCJsZW5ndGgiLCJ0b2RvcyIsImZvcm1Db250YWluZXIiLCJsaXN0Rm9ybSIsInBsYWNlaG9sZGVyIiwidG9kb0Rlc2NyaXB0aW9uIiwidHlwZSIsImxhYmVsSGlnaCIsIm5hbWUiLCJ2YWx1ZSIsImxhYmVsTWVkaXVtIiwibGFiZWxMb3ciLCJsb3dQcmlvcml0eSIsInRvZG9Ob3RlIiwiY29tcGxldGVMYWJlbCIsInRvZG9CdG4iLCJwdXNoIiwiY2hlY2tlZCIsIm5ld0xpc3QiXSwi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dW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QpIHtcclxuICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIHRoaXMubm90ZXMgPSBub3RlcztcclxuICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcclxuXHJcbiAgY29uc3QgZWRpdExpc3QgPSAobmV3VGl0bGUsIG5ld2Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSwgbmV3Tm90ZXMsIG5ld0NoZWNrbGlzdCkgPT4ge1xyXG4gICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld2Rlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIHRoaXMubm90ZXMgPSBuZXdOb3RlcztcclxuICAgIHRoaXMuY2hlY2tsaXN0ID0gbmV3Q2hlY2tsaXN0O1xyXG4gIH07XHJcblxyXG4gIFxyXG5cclxufVxyXG5cclxuVG9kby5wcm90b3R5cGUuY2hhbmdlUHJpb3JpdHkgPSAodGFyZ2V0LCB0ZXh0KSA9PiB7XHJcbiAgdGFyZ2V0LmlubmVySFRNTCA9IHRleHQ7XHJcbiAgdGhpcy5wcmlvcml0eSA9IHRleHQ7XHJcbiAgY29uc29sZS5sb2codGhpcy5wcmlvcml0eSk7XHJcbn1cclxuXHJcblRvZG8ucHJvdG90eXBlLmNoYW5nZUNvbXBsZXRpb25CdG4gPSAodGFyZ2V0KSA9PiB7XHJcbnRhcmdldC5pbm5lckhUTUwgPSBcIkNvbXBsZXRlZFwiO1xyXG50aGlzLmNoZWNrbGlzdCA9IFwiQ29tcGxldGVkXCI7XHJcbmNvbnNvbGUubG9nKHRoaXMuY2hlY2tsaXN0KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xyXG4iLCJpbXBvcnQgVG9kbyBmcm9tICcuL25ld1RvZG8nO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG5cclxuY29uc3QgZGlzcGxheVRvZG9JdGVtcyA9IChhcnIpID0+IHtcclxuICBjb25zdCB0b2RvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvZG9XcmFwLmNsYXNzTGlzdC5hZGQoJ3RvZG8td3JhcCcpO1xyXG4gIHRvZG9XcmFwLmlkID0gJ3RvZG8td3JhcCc7XHJcblxyXG4gIGNvbnN0IHRvZG9JdGVtTWFrZXIgPSAocGFyZW50LCBvYmopID0+IHtcclxuICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW1zJyk7XHJcblxyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XHJcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XHJcblxyXG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvRGVzYy5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2MnKTtcclxuICAgIHRvZG9EZXNjLnRleHRDb250ZW50ID0gb2JqLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlJyk7XHJcbiAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IG9iai5kdWVEYXRlO1xyXG5cclxuICAgIGNvbnN0IHRvZG9Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZG9Ob3Rlcy5jbGFzc0xpc3QuYWRkKCd0b2RvLW5vdGVzJyk7XHJcbiAgICB0b2RvTm90ZXMudGV4dENvbnRlbnQgPSBvYmoubm90ZXM7XHJcblxyXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpO1xyXG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gb2JqLnByaW9yaXR5O1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1jb250YWluZXInKTtcclxuICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgaGlnaFByaW9yaXR5LmlubmVySFRNTCA9IFwiQ2hhbmdlIHRvIGhpZ2hcIjtcclxuICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5Jyk7XHJcbiAgICBoaWdoUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcclxuICAgICAgICBvYmouY2hhbmdlUHJpb3JpdHkodG9kb1ByaW9yaXR5LCAnVXJnZW50JyApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG1lZGl1bVByaW9yaXR5LmlubmVySFRNTCA9IFwiQ2hhbmdlIHRvIE1lZGl1bVwiO1xyXG4gICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XHJcbiAgICBtZWRpdW1Qcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xyXG4gICAgICAgIG9iai5jaGFuZ2VQcmlvcml0eSh0b2RvUHJpb3JpdHksICdJbXBvcnRhbnQnICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBub3JtYWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbm9ybWFsUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJDaGFuZ2UgdG8gTG93XCI7XHJcbiAgICBub3JtYWxQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5Jyk7XHJcbiAgICBub3JtYWxQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xyXG4gICAgICAgIG9iai5jaGFuZ2VQcmlvcml0eSh0b2RvUHJpb3JpdHksICdOb3JtYWwnICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xyXG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xyXG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQobm9ybWFsUHJpb3JpdHkpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB0b2RvQ2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvQ2hlY2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2hlY2tsaXN0Jyk7XHJcbiAgICB0b2RvQ2hlY2tMaXN0LnRleHRDb250ZW50ID0gb2JqLmNoZWNrbGlzdDtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2Vjb21wbGV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjaGFuZ2Vjb21wbGV0aW9uLmlubmVySFRNTCA9IFwiTWFyayBhcyBjb21wZXRlZFwiO1xyXG4gICAgY2hhbmdlY29tcGxldGlvbi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtY29tcGxldGlvbicpO1xyXG4gICAgY2hhbmdlY29tcGxldGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgIG9iai5jaGFuZ2VDb21wbGV0aW9uQnRuKHRvZG9DaGVja0xpc3QpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xyXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xyXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xyXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb05vdGVzKTtcclxuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XHJcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcik7XHJcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvQ2hlY2tMaXN0KTtcclxuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGNoYW5nZWNvbXBsZXRpb24pO1xyXG4gICAgXHJcblxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcclxuICB9O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3Qgb2JqID0gYXJyW2ldO1xyXG4gICAgdG9kb0l0ZW1NYWtlcih0b2RvV3JhcCwgb2JqKTtcclxuICB9XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9kb1dyYXApO1xyXG59O1xyXG5cclxuY29uc3QgY2xlYXJFbGVtZW50ID0gKGlkKSA9PiB7XHJcbiAgY29uc3QgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gIGVsZS5pbm5lckhUTUwgPSAnJztcclxufTtcclxuXHJcbmNvbnN0IG5ld0xpc3QgPSAoYXJyKSA9PiB7XHJcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBsaXN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBsaXN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdsaXN0LWZvcm0nKTtcclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RGb3JtKTtcclxuXHJcbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RvVGl0bGUucGxhY2Vob2xkZXIgPSAnRW50ZXIgVGl0bGUnO1xyXG4gIGxpc3RGb3JtLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XHJcblxyXG4gIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb0Rlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gJ0VudGVyIERlc2NyaXB0aW9uJztcclxuICBsaXN0Rm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xyXG5cclxuICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb0R1ZURhdGUudHlwZSA9ICdkYXRlJztcclxuICB0b2RvRHVlRGF0ZS5wbGFjZWhvbGRlciA9ICdFbnRlciBEZXNjcmlwdGlvbic7XHJcbiAgbGlzdEZvcm0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xyXG5cclxuICBjb25zdCBsYWJlbEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsSGlnaC50ZXh0Q29udGVudCA9ICdVcmdlbnQnO1xyXG4gIGxpc3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsSGlnaCk7XHJcblxyXG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaGlnaFByaW9yaXR5LnR5cGUgPSAncmFkaW8nO1xyXG4gIGhpZ2hQcmlvcml0eS5uYW1lID0gJ3ByaW9yaXR5JztcclxuICBoaWdoUHJpb3JpdHkudmFsdWUgPSAnaGlnaCc7XHJcbiAgbGlzdEZvcm0uYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcclxuXHJcbiAgY29uc3QgbGFiZWxNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsTWVkaXVtLnRleHRDb250ZW50ID0gJ2ltcG9ydGFudCc7XHJcbiAgbGlzdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWxNZWRpdW0pO1xyXG5cclxuICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgbWVkaXVtUHJpb3JpdHkudHlwZSA9ICdyYWRpbyc7XHJcbiAgbWVkaXVtUHJpb3JpdHkubmFtZSA9ICdwcmlvcml0eSc7XHJcbiAgbWVkaXVtUHJpb3JpdHkudmFsdWUgPSAnbWVkaXVtJztcclxuICBsaXN0Rm9ybS5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XHJcblxyXG4gIGNvbnN0IGxhYmVsTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbExvdy50ZXh0Q29udGVudCA9ICdub3JtYWwnO1xyXG4gIGxpc3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsTG93KTtcclxuXHJcbiAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGxvd1ByaW9yaXR5LnR5cGUgPSAncmFkaW8nO1xyXG4gIGxvd1ByaW9yaXR5Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gIGxvd1ByaW9yaXR5LnZhbHVlID0gJ2xvdyc7XHJcbiAgbGlzdEZvcm0uYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xyXG5cclxuICBjb25zdCB0b2RvTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdG9kb05vdGUucGxhY2Vob2xkZXIgPSAnQWRkIE5vdGUnO1xyXG4gIGxpc3RGb3JtLmFwcGVuZENoaWxkKHRvZG9Ob3RlKTtcclxuXHJcbiAgY29uc3QgY29tcGxldGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgY29tcGxldGVMYWJlbC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xyXG4gIGxpc3RGb3JtLmFwcGVuZENoaWxkKGNvbXBsZXRlTGFiZWwpO1xyXG5cclxuICBjb25zdCB0b2RvQ2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RvQ2hlY2tMaXN0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGxpc3RGb3JtLmFwcGVuZENoaWxkKHRvZG9DaGVja0xpc3QpO1xyXG5cclxuICBjb25zdCB0b2RvUHJpb3JpdHkgPSAoKSA9PiB7XHJcbiAgICBpZiAoaGlnaFByaW9yaXR5LmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIGhpZ2hQcmlvcml0eS52YWx1ZTtcclxuICAgIH0gaWYgKG1lZGl1bVByaW9yaXR5LmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIG1lZGl1bVByaW9yaXR5LnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvd1ByaW9yaXR5LnZhbHVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZG9Db21wbGV0ZSA9ICgpID0+ICgodG9kb0NoZWNrTGlzdC5jaGVja2VkID09PSB0cnVlKSA/ICdjb21wbGV0ZWQnIDogJ3BlbmRpbmcnKTtcclxuXHJcbiAgY29uc3QgdG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRvZG9CdG4udHlwZSA9ICdidXR0b24nO1xyXG4gIHRvZG9CdG4udGV4dENvbnRlbnQgPSAnYWRkJztcclxuICB0b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYXJyLnB1c2gobmV3IFRvZG8oXHJcbiAgICAgIHRvZG9UaXRsZS52YWx1ZSxcclxuICAgICAgdG9kb0Rlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgICB0b2RvRHVlRGF0ZS52YWx1ZSxcclxuICAgICAgdG9kb1ByaW9yaXR5KCksXHJcbiAgICAgIHRvZG9Ob3RlLnZhbHVlLFxyXG4gICAgICB0b2RvQ29tcGxldGUoKSxcclxuICAgICkpO1xyXG4gICAgY2xlYXJFbGVtZW50KCd0b2RvLXdyYXAnKTtcclxuICAgIGRpc3BsYXlUb2RvSXRlbXMoYXJyKTtcclxuICB9KTtcclxuICBsaXN0Rm9ybS5hcHBlbmRDaGlsZCh0b2RvQnRuKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IG5ld0xpc3QsIGRpc3BsYXlUb2RvSXRlbXMgfTtcclxuIiwiaW1wb3J0IHsgbmV3TGlzdCwgZGlzcGxheVRvZG9JdGVtcyB9IGZyb20gJy4vZG9tJztcclxuXHJcblxyXG5jb25zdCB0b2RvcyA9IFt7XHJcbiAgdGl0bGU6ICdUb2RvIE9uZScsXHJcbiAgZGVzY3JpcHRpb246ICdUb2RvIGlzIGFib3V0IGZvb2QnLFxyXG4gIGR1ZURhdGU6ICcyMy8wMy8yMDEwJyxcclxuICBub3RlczogJ3RoaXMgaXMgYSB0b2RvIG5vdGUnLFxyXG4gIHByaW9yaXR5OiAnVXJnZW50JyxcclxuICBjaGVja2xpc3Q6ICdjaGVja2VkJyxcclxufV07XHJcbmRpc3BsYXlUb2RvSXRlbXModG9kb3MpO1xyXG5uZXdMaXN0KHRvZG9zKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==