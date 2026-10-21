
import {
  MapPin,
  Navigation,
  ArrowUpRight,
} from "lucide-react";

const offices = [
  {
    id: 1,
    name: "Nanded Office",
    address: "Chaitanya Nagar, Nanded, Maharashtra",
    mapQuery: "Chaitanya Nagar, Nanded, Maharashtra",
  },
  {
    id: 2,
    name: "Purna Office",
    address: "Anand Nagar, Purna, Maharashtra",
    mapQuery: "Anand Nagar, Purna, Maharashtra",
  },
];

function OfficeLocations() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#C8102E]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
              Our Locations
            </span>

            <span className="h-[2px] w-8 bg-[#C8102E]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-[44px]">
            Find Our{" "}
            <span className="text-[#D4A017]">
              Offices.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Connect with our team at either of our
            office locations in Maharashtra.
          </p>
        </div>

        {/* Office Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {offices.map((office) => {
            const encodedQuery = encodeURIComponent(
              office.mapQuery
            );

            const embedUrl =
              `https://maps.google.com/maps?q=${encodedQuery}&output=embed`;

            const directionsUrl =
              `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

            return (
              <article
                key={office.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                {/* Map */}
                <div className="relative h-[280px] bg-slate-100 sm:h-[340px]">
                  <iframe
                    title={`${office.name} map`}
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                    allowFullScreen
                  />
                </div>

                {/* Office Details */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F8FAFC] text-[#C8102E]">
                      <MapPin size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#111827] sm:text-2xl">
                        {office.name}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {office.address}
                      </p>
                    </div>
                  </div>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#111827] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#C8102E]"
                  >
                    <Navigation size={18} />
                    View on Google Maps
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Location Note */}
        <p className="mt-8 text-center text-sm leading-7 text-slate-500">
          Maps display the general office areas.
          Please contact us for the exact office
          location before visiting.
        </p>

      </div>
    </section>
  );
}

export default OfficeLocations;
