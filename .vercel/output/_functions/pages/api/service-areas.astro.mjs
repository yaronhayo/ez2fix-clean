import { s as serverEnv } from '../../chunks/env_DdGjSxDD.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const serviceAreas = [
  { name: "Fair Lawn", slug: "fair-lawn", lat: 40.9401, lng: -74.1318 },
  { name: "Elmwood Park", slug: "elmwood-park", lat: 40.9026, lng: -74.1182 },
  { name: "Garfield", slug: "garfield", lat: 40.8815, lng: -74.1132 },
  { name: "Lodi", slug: "lodi", lat: 40.8782, lng: -74.0829 },
  { name: "Saddle Brook", slug: "saddle-brook", lat: 40.8987, lng: -74.0943 },
  { name: "Wallington", slug: "wallington", lat: 40.8532, lng: -74.1154 },
  { name: "Wood-Ridge", slug: "wood-ridge", lat: 40.8451, lng: -74.0882 },
  { name: "Carlstadt", slug: "carlstadt", lat: 40.839, lng: -74.0893 },
  { name: "East Rutherford", slug: "east-rutherford", lat: 40.8368, lng: -74.0968 },
  { name: "Hasbrouck Heights", slug: "hasbrouck-heights", lat: 40.8582, lng: -74.0729 },
  { name: "Little Ferry", slug: "little-ferry", lat: 40.8451, lng: -74.0393 },
  { name: "Moonachie", slug: "moonachie", lat: 40.8418, lng: -74.0526 },
  { name: "Rutherford", slug: "rutherford", lat: 40.8265, lng: -74.1068 },
  { name: "Clifton", slug: "clifton", lat: 40.8584, lng: -74.1638 },
  { name: "Cedar Grove", slug: "cedar-grove", lat: 40.8532, lng: -74.2285 },
  { name: "Montclair", slug: "montclair", lat: 40.8176, lng: -74.209 },
  { name: "North Caldwell", slug: "north-caldwell", lat: 40.8732, lng: -74.2571 },
  { name: "West Caldwell", slug: "west-caldwell", lat: 40.8487, lng: -74.2765 },
  { name: "Little Falls", slug: "little-falls", lat: 40.8793, lng: -74.2182 }
];
const GET = async ({ request, url }) => {
  try {
    const searchParams = url.searchParams;
    const mapType = searchParams.get("type") || "service-areas";
    if (mapType === "service-areas") {
      const mapData = {
        center: serverEnv.business.coordinates,
        zoom: 11,
        serviceRadius: serverEnv.serviceArea.radiusMiles,
        areas: serviceAreas.map((area) => ({
          name: area.name,
          slug: area.slug,
          lat: area.lat,
          lng: area.lng,
          href: `/service-areas/${area.slug}`,
          description: `Professional garage door service in ${area.name}, NJ`
        })),
        businessLocation: {
          name: serverEnv.business.name,
          lat: serverEnv.business.coordinates.lat,
          lng: serverEnv.business.coordinates.lng,
          phone: serverEnv.business.phone
        }
      };
      return new Response(JSON.stringify(mapData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
        }
      });
    }
    if (mapType === "static") {
      const width = parseInt(searchParams.get("width") || "600");
      const height = parseInt(searchParams.get("height") || "400");
      const zoom = parseInt(searchParams.get("zoom") || "11");
      const center = `${serverEnv.business.coordinates.lat},${serverEnv.business.coordinates.lng}`;
      const markers = serviceAreas.slice(0, 10).map(
        (area) => `color:0xEECD5C|label:${area.name.charAt(0)}|${area.lat},${area.lng}`
      ).join("&markers=");
      const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?key=${serverEnv.googleMaps?.apiKey || ""}&center=${center}&zoom=${zoom}&size=${width}x${height}&maptype=roadmap&markers=color:0xD2A63C|label:B|${center}&markers=${markers}`;
      return new Response(JSON.stringify({ url: staticMapUrl }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
        }
      });
    }
    return new Response(JSON.stringify({ error: "Invalid map type" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Service areas API error:", error);
    return new Response(JSON.stringify({
      success: false,
      error: "Internal server error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
