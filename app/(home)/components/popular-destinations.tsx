import Image from "next/image"
import Link from "next/link"

import { Button } from "@/app/components/ui/button"
import { SearchParams } from "@/app/lib/types"
import { formatCurrency } from "@/app/lib/utils"

import Cancun from "../../../public/assets/destinations/cancun.jpg"
import Dubai from "../../../public/assets/destinations/dubai.jpg"
import Paris from "../../../public/assets/destinations/paris.jpg"
import Rio from "../../../public/assets/destinations/rio.jpg"
import Rome from "../../../public/assets/destinations/rome.jpg"
import Sydney from "../../../public/assets/destinations/sydney.jpg"

export function PopularDestinations() {
  const trendingPlaces = [
    {
      id: "cancun",
      slug: "cancun",
      name: "Cancún, México",
      lat: 21.1617,
      lng: -86.851,
      image_url: Cancun,
      starting_price: 49,
    },
    {
      id: "dubai",
      slug: "dubai",
      name: "Dubai, United Arab Emirates",
      lat: 25.2652,
      lng: 55.2928,
      image_url: Dubai,
      starting_price: 89,
    },
    {
      id: "rome",
      slug: "rome",
      name: "Rome, Italy",
      lat: 41.8931,
      lng: 12.4832,
      image_url: Rome,
      starting_price: 79,
    },
    {
      id: "paris",
      slug: "paris",
      name: "Paris, France",
      lat: 48.8589,
      lng: 2.3469,
      image_url: Paris,
      starting_price: 69,
    },
    {
      id: "rio",
      slug: "rio",
      name: "Rio de Janeiro, Brazil",
      lat: -22.9148,
      lng: -43.4075,
      image_url: Rio,
      starting_price: 59,
    },
    {
      id: "sydney",
      slug: "sydney",
      name: "Sydney, Australia",
      lat: -33.8693,
      lng: 151.209,
      image_url: Sydney,
      starting_price: 89,
    },
  ]

  return (
    <section>
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-balance text-[19px] font-bold sm:text-[21px] lg:text-[23px]">
          Where to Rent Next
        </h2>
        <div className="pt-6">
          <div className="group grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8 md:grid-cols-5 [&_a:hover_~_*_img]:!opacity-100">
            {trendingPlaces.map(
              (
                { id, slug, image_url, lat, lng, name, starting_price },
                index
              ) => (
                <article
                  key={id}
                  className={`relative ${index === trendingPlaces.length - 1 ? "md:hidden" : ""}`}
                >
                  <Button
                    variant={"link"}
                    className="m-0 flex size-full p-0"
                    asChild
                  >
                    <Link
                      href={{
                        pathname: "/cars",
                        query: {
                          [SearchParams.LOCATION]: slug,
                          [SearchParams.LAT]: lat,
                          [SearchParams.LNG]: lng,
                        },
                      }}
                      className="absolute left-0 top-0 z-10 size-full"
                    />
                  </Button>
                  <div className="relative aspect-square">
                    <Image
                      src={image_url}
                      alt={name}
                      quality={85}
                      priority
                      fill
                      sizes="(max-width: 550px) 50vw, (max-width: 950px) 33.33vw, 20vw"
                      className="rounded-xl object-cover transition-opacity group-hover:opacity-70"
                      placeholder="blur"
                    />
                  </div>
                  <div className="pt-3 sm:pt-3.5">
                    <h3 className="truncate text-[13px] font-semibold leading-[22px] text-neutral-950 sm:text-[14px] xl:text-[15px]">
                      {name}
                    </h3>
                    <p className="truncate text-[13px] leading-[21px] text-neutral-600 sm:text-[14px] sm:leading-[26px]">
                      Cars from {formatCurrency(starting_price)}+
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}