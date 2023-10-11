'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CarCard } from '@/components/car-card';
import { FiltersModal } from '@/components/filters/modal';
import { convertToKebabCase } from '@/lib/utils';
import { allCars } from '@/data/all-cars';
import { ESearchParams } from '@/types/filters';

function getAllCars() {
  return allCars;
}

export function CarsView() {
  const searchParams = useSearchParams();
  const [filteredCars, setFilteredCars] = useState(getNewFilteredCars());

  useEffect(() => {
    setFilteredCars(getNewFilteredCars());
  }, [searchParams]);

  function getNewFilteredCars() {
    let newFilteredCars = getAllCars();

    if (searchParams.has(ESearchParams.MIN_PRICE)) {
      newFilteredCars = newFilteredCars.filter((car) => {
        const currentPrice =
          car.price.perDay.discount.amount || car.price.perDay.retail.amount;
        return (
          currentPrice >= Number(searchParams.get(ESearchParams.MIN_PRICE))
        );
      });
    }

    if (searchParams.has(ESearchParams.MAX_PRICE)) {
      newFilteredCars = newFilteredCars.filter((car) => {
        const currentPrice =
          car.price.perDay.discount.amount || car.price.perDay.retail.amount;
        return (
          currentPrice <= Number(searchParams.get(ESearchParams.MAX_PRICE))
        );
      });
    }

    if (searchParams.has(ESearchParams.CAR_TYPE)) {
      newFilteredCars = newFilteredCars.filter((car) =>
        searchParams
          .getAll(ESearchParams.CAR_TYPE)
          .includes(convertToKebabCase(car.specs.carType)),
      );
    }

    if (searchParams.has(ESearchParams.TRANSMISSION)) {
      newFilteredCars = newFilteredCars.filter((car) =>
        searchParams
          .getAll(ESearchParams.TRANSMISSION)
          .includes(convertToKebabCase(car.specs.transmission)),
      );
    }

    if (searchParams.has(ESearchParams.ENGINE_TYPE)) {
      newFilteredCars = newFilteredCars.filter((car) =>
        searchParams
          .getAll(ESearchParams.ENGINE_TYPE)
          .includes(convertToKebabCase(car.specs.engineType)),
      );
    }

    if (searchParams.has(ESearchParams.MIN_SEATS)) {
      newFilteredCars = newFilteredCars.filter(
        (car) =>
          Number(car.specs.capacity.seats) >=
          Number(searchParams.get(ESearchParams.MIN_SEATS)),
      );
    }

    return newFilteredCars;
  }

  return (
    <>
      <div className="mx-5 my-4 flex items-center justify-between sm:mx-6">
        <p className="text-[13px] font-semibold text-neutral-800">
          {filteredCars.length > 0 &&
            (filteredCars.length > 1
              ? `${filteredCars.length} cars`
              : `${filteredCars.length} car`)}
        </p>
        <FiltersModal />
      </div>
      <div className="mx-5 mb-12 sm:mx-6">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-center justify-center gap-6">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              slug={car.slug}
              title={car.title}
              image={car.image}
              specs={car.specs}
              price={car.price}
              rating={Number(car.rating)}
              reviews={Number(car.reviews)}
              unlimitedMileage
            />
          ))}
        </div>
      </div>
    </>
  );
}
