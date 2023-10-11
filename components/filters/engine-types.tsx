import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ISelectedFilters } from '@/types/filters';
import { EEngineTypes } from '@/types/car-specs';

interface FiltersEngineTypesProps {
  selectedFilters: ISelectedFilters;
  onCheckedChange: (
    checked: boolean | 'indeterminate',
    value: EEngineTypes,
  ) => void;
}

export function FiltersEngineTypes({
  selectedFilters,
  onCheckedChange,
}: FiltersEngineTypesProps) {
  return (
    <div className="relative px-6 py-8 after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-neutral-100 after:content-['']">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Engine type</h3>
        <div className="grid grid-cols-2 items-center">
          {Object.keys(EEngineTypes).map((key) => {
            const value: EEngineTypes = EEngineTypes[key];

            return (
              <div key={key} className="flex items-center py-3">
                <Checkbox
                  id={key}
                  onCheckedChange={(checked) => onCheckedChange(checked, value)}
                  checked={selectedFilters.engineTypes.includes(value)}
                />
                <div className="w-full">
                  <Label
                    htmlFor={key}
                    className="block cursor-pointer pl-4 text-base font-normal"
                  >
                    {value}
                  </Label>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
