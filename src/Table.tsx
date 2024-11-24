import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import {
  BatteryDetails,
  CredentialSubjectVariant1,
  CredentialSubjectVariant2,
} from "./common";

export const Table = () => {
  //data and fetching state

  const [data, setData] = useState<
    CredentialSubjectVariant1[] | CredentialSubjectVariant2[]
  >([]);

  const [isError, setIsError] = useState(false);

  const dataFormatter = (result: BatteryDetails[]) => {
    return result.map((entry) => {
      return entry.credentialSubject;
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://api-vera.susi.spherity.dev/credential-registry/did:web:api-rcs.susi.spherity.dev:did-registry:acme-power-drive-x-1000-3985-cb-1739186-d-8-d"
        );
        const result = (await response.json()) as BatteryDetails[];
        const formattedResult = dataFormatter(result);
        setData(formattedResult);
      } catch (error) {
        setIsError(true);
        console.error(isError); // console loging the error
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Displaying the few columns as of now, this can be purely customized based on the requirement
  and also passing only credentialsubject to the table for display purpose.
  */
  const columns = useMemo<
    MRT_ColumnDef<CredentialSubjectVariant1 | CredentialSubjectVariant2>[]
  >(
    () => [
      {
        accessorKey: "batteryModel",
        header: "Battery Model",
      },
      {
        accessorKey: "manufacturer",
        header: "Manufacturer",
        filterVariant: "text",
      },
      {
        accessorKey: "batteryWeight",
        header: "Battery Weight",
      },
      {
        accessorKey: "esgScore",
        header: "ESGScore",
        filterVariant: "range-slider",
        filterFn: "betweenInclusive", // default (or between)
        muiFilterSliderProps: {
          marks: true,
          max: 100, //custom max (as opposed to faceted max)
          min: 0, //custom min (as opposed to faceted min)
          step: 5,
        },
      },
      {
        accessorKey: `dueDiligenceScore`,
        header: "Due Diligence Score",
        filterVariant: "range-slider",
        filterFn: "betweenInclusive", // default (or between)
        muiFilterSliderProps: {
          marks: true,
          max: 100, //custom max (as opposed to faceted max)
          min: 0, //custom min (as opposed to faceted min)
          step: 10,
        },
      },
      {
        accessorKey: `greenhouseGasScore`,
        header: "Green House Gas Score",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: { showColumnFilters: true },
  });

  return (
    <>
      <div>
        <h1> Digital Product Passport</h1>
      </div>
      <MaterialReactTable table={table} />
    </>
  );
};
