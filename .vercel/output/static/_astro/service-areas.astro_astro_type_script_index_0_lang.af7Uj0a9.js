window.initServiceAreasMap=function(){const o=document.getElementById("service-areas-map"),t=document.getElementById("map-loading");if(!o)return;t&&(t.style.display="none");const n=[{name:"Fair Lawn",county:"Bergen County",zip:"07410",type:"Primary",lat:40.9401,lng:-74.1318,color:"#D2A63C",hasPage:!0,slug:"fair-lawn"},{name:"Little Falls",county:"Passaic County",zip:"07424",type:"Primary",lat:40.8751,lng:-74.2182,color:"#D2A63C",hasPage:!0,slug:"little-falls"},{name:"Clifton",county:"Passaic County",zip:"07011",type:"Primary",lat:40.8584,lng:-74.1638,color:"#D2A63C",hasPage:!0,slug:"clifton"},{name:"Cedar Grove",county:"Essex County",zip:"07009",type:"Primary",lat:40.8532,lng:-74.229,color:"#D2A63C",hasPage:!0,slug:"cedar-grove"},{name:"West Caldwell",county:"Essex County",zip:"07006",type:"Primary",lat:40.8398,lng:-74.2951,color:"#D2A63C",hasPage:!0,slug:"west-caldwell"},{name:"North Caldwell",county:"Essex County",zip:"07006",type:"Primary",lat:40.8715,lng:-74.2585,color:"#D2A63C",hasPage:!0,slug:"north-caldwell"},{name:"Montclair",county:"Essex County",zip:"07042",type:"Primary",lat:40.8176,lng:-74.209,color:"#D2A63C",hasPage:!0,slug:"montclair"},{name:"Elmwood Park",county:"Bergen County",zip:"07407",type:"Secondary",lat:40.9034,lng:-74.1201,color:"#EECD5C",hasPage:!1},{name:"Saddle Brook",county:"Bergen County",zip:"07663",type:"Secondary",lat:40.8987,lng:-74.0965,color:"#EECD5C",hasPage:!1},{name:"Garfield",county:"Bergen County",zip:"07026",type:"Secondary",lat:40.8815,lng:-74.1132,color:"#EECD5C",hasPage:!1},{name:"Lodi",county:"Bergen County",zip:"07644",type:"Secondary",lat:40.8823,lng:-74.0832,color:"#EECD5C",hasPage:!1},{name:"Wallington",county:"Bergen County",zip:"07057",type:"Secondary",lat:40.8515,lng:-74.1043,color:"#EECD5C",hasPage:!1},{name:"Paramus",county:"Bergen County",zip:"07652",type:"Secondary",lat:40.9445,lng:-74.0654,color:"#EECD5C",hasPage:!1},{name:"Hackensack",county:"Bergen County",zip:"07601",type:"Secondary",lat:40.8859,lng:-74.0432,color:"#EECD5C",hasPage:!1},{name:"Maywood",county:"Bergen County",zip:"07607",type:"Secondary",lat:40.9023,lng:-74.0632,color:"#EECD5C",hasPage:!1},{name:"Rochelle Park",county:"Bergen County",zip:"07662",type:"Secondary",lat:40.9075,lng:-74.0765,color:"#EECD5C",hasPage:!1},{name:"Jersey City",county:"Hudson County",zip:"07302",type:"Extended",lat:40.7178,lng:-74.0431,color:"#BB8525",hasPage:!1},{name:"Hoboken",county:"Hudson County",zip:"07030",type:"Extended",lat:40.7439,lng:-74.0323,color:"#BB8525",hasPage:!1},{name:"Union City",county:"Hudson County",zip:"07087",type:"Extended",lat:40.7662,lng:-74.0376,color:"#BB8525",hasPage:!1},{name:"Weehawken",county:"Hudson County",zip:"07086",type:"Extended",lat:40.7696,lng:-74.0204,color:"#BB8525",hasPage:!1},{name:"Secaucus",county:"Hudson County",zip:"07094",type:"Extended",lat:40.7896,lng:-74.0565,color:"#BB8525",hasPage:!1}],l=new google.maps.Map(o,{zoom:10,center:{lat:40.85,lng:-74.17},mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{color:"#F3F3E6"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#BB8525"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#1D1912"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#1D1912"}]}]});n.forEach(e=>{const s=e.type==="Primary"?10:e.type==="Secondary"?8:6,a=new google.maps.Marker({position:{lat:e.lat,lng:e.lng},map:l,title:`${e.name} - ${e.type} Service Area`,icon:{path:google.maps.SymbolPath.CIRCLE,scale:s,fillColor:e.color,fillOpacity:1,strokeColor:"#1D1912",strokeWeight:2}}),c=e.type==="Primary"?e.hasPage?"Featured service area • Dedicated page • Same-day availability":"Same-day service available • Fastest response times":e.type==="Secondary"?"Full service coverage • Reliable scheduling • Professional technicians":"Service by appointment • Complete garage door services • Licensed & insured",y=`
        <div style="padding: 12px; font-family: Arial, sans-serif; max-width: 280px;">
          <h3 style="color: #1D1912; margin: 0 0 8px 0; font-size: 18px; font-weight: bold;">${e.name}</h3>
          <p style="color: #BB8525; margin: 0 0 8px 0; font-size: 14px;">${e.county} • ${e.zip}</p>
          
          <div style="margin-bottom: 10px;">
            <p style="background-color: ${e.type==="Primary"?"rgba(210, 166, 60, 0.1)":e.type==="Secondary"?"rgba(238, 205, 92, 0.1)":"rgba(187, 133, 37, 0.1)"}; 
                      color: ${e.color}; padding: 4px 8px; border-radius: 12px; font-size: 12px; 
                      font-weight: bold; display: inline-block; margin: 0;">${e.type} Service Area</p>
            ${e.hasPage?'<p style="background-color: #D2A63C; color: #F3F3E6; padding: 3px 6px; border-radius: 8px; font-size: 11px; font-weight: bold; display: inline-block; margin: 4px 0 0 8px;">FEATURED</p>':""}
          </div>
          
          <p style="color: #1D1912; margin: 0 0 12px 0; font-size: 13px; line-height: 1.4;">
            ${c}
          </p>
          
          <div style="display: flex; gap: 8px; margin-top: 12px;">
            ${e.hasPage?`<a href="/service-areas/${e.slug}" 
                 style="background-color: #D2A63C; color: #F3F3E6; 
                        padding: 8px 12px; border-radius: 4px; text-decoration: none; 
                        font-size: 12px; font-weight: bold; flex: 1; text-align: center;">View Details</a>`:`<a href="tel:${siteConfig.business.phone}" 
                 style="background-color: ${e.color}; color: ${e.type==="Secondary"?"#1D1912":"#F3F3E6"}; 
                        padding: 8px 12px; border-radius: 4px; text-decoration: none; 
                        font-size: 12px; font-weight: bold; flex: 1; text-align: center;">Call Now</a>`}
            <a href="/booking" 
               style="border: 2px solid #BB8525; color: #BB8525; background: transparent;
                      padding: 6px 12px; border-radius: 4px; text-decoration: none; 
                      font-size: 12px; font-weight: bold; flex: 1; text-align: center;">Get Quote</a>
          </div>
        </div>
      `,r=new google.maps.InfoWindow({content:y});a.addListener("click",()=>{n.forEach(i=>{i.infoWindow&&i.infoWindow.close()}),r.open(l,a)}),e.infoWindow=r}),console.log("Service Areas Map initialized successfully")};setTimeout(()=>{document.getElementById("service-areas-map");const o=document.getElementById("map-loading");o&&o.style.display!=="none"&&(o.innerHTML=`
        <div class="text-lg font-semibold mb-2" style="color: #1D1912;">Interactive Map Temporarily Unavailable</div>
        <div class="text-sm" style="color: #BB8525;">Please see our complete service area list below the map</div>
      `)},15e3);
