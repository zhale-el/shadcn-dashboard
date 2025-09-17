import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed521",
      amount: 134,
      status: "success",
      username: "Maryam El",
      email: "Maryam@gmail.com",
    },
    {
      id: "728ed522",
      amount: 124,
      status: "pending",
      username: "Jane Doe",
      email: "janedoe@gmail.com",
    },
    {
      id: "728ed523",
      amount: 167,
      status: "success",
      username: "Mike Galloway",
      email: "mikegalloway@gmail.com",
    },
    {
      id: "728ed524",
      amount: 156,
      status: "failed",
      username: "Minerva Robinson",
      email: "minerbarobinson@gmail.com",
    },
    {
      id: "728ed525",
      amount: 145,
      status: "success",
      username: "Mable Clayton",
      email: "mableclayton@gmail.com",
    },
    {
      id: "728ed526",
      amount: 189,
      status: "pending",
      username: "Nathan McDaniel",
      email: "nathanmcdaniel@gmail.com",
    },
    {
      id: "728ed527",
      amount: 178,
      status: "success",
      username: "Myrtie Lamb",
      email: "myrtielamb@gmail.com",
    },
    {
      id: "728ed528",
      amount: 190,
      status: "success",
      username: "Leona Bryant",
      email: "leonabryant@gmail.com",
    },
    {
      id: "728ed529",
      amount: 134,
      status: "failed",
      username: "Aaron Willis",
      email: "aaronwillis@gmail.com",
    },
    {
      id: "728ed52a",
      amount: 543,
      status: "success",
      username: "Joel Keller",
      email: "joelkeller@gmail.com",
    },
    {
      id: "728ed52b",
      amount: 234,
      status: "pending",
      username: "Daniel Ellis",
      email: "danielellis@gmail.com",
    },
    {
      id: "728ed52c",
      amount: 345,
      status: "success",
      username: "Gordon Kennedy",
      email: "gordonkennedy@gmail.com",
    },
    {
      id: "728ed52d",
      amount: 335,
      status: "failed",
      username: "Emily Hoffman",
      email: "emilyhoffman@gmail.com",
    },
    {
      id: "728ed52e",
      amount: 664,
      status: "pending",
      username: "Jeffery Garrett",
      email: "jefferygarrett@gmail.com",
    },
    {
      id: "728ed52f",
      amount: 332,
      status: "success",
      username: "Ralph Baker",
      email: "ralphbaker@gmail.com",
    },
    {
      id: "728ed52g",
      amount: 413,
      status: "failed",
      username: "Seth Fields",
      email: "sethfields@gmail.com",
    },
    {
      id: "728ed52h",
      amount: 345,
      status: "pending",
      username: "Julia Webb",
      email: "juliawebb@gmail.com",
    },
    {
      id: "728ed52i",
      amount: 754,
      status: "success",
      username: "Gary Banks",
      email: "garybanks@gmail.com",
    },
    {
      id: "728ed52j",
      amount: 643,
      status: "failed",
      username: "Flora Chambers",
      email: "florachambers@gmail.com",
    },
    {
      id: "728ed52k",
      amount: 543,
      status: "pending",
      username: "Steve Hanson",
      email: "stevehanson@gmail.com",
    },
    {
      id: "728ed52l",
      amount: 324,
      status: "success",
      username: "Lola Robinson",
      email: "lolarobinson@gmail.com",
    },
    {
      id: "728ed52m",
      amount: 123,
      status: "pending",
      username: "Ethel Waters",
      email: "ethelwaters@gmail.com",
    },
    {
      id: "728ed52n",
      amount: 422,
      status: "failed",
      username: "Grace Edwards",
      email: "graceedwards@gmail.com",
    },
    {
      id: "728ed52o",
      amount: 712,
      status: "success",
      username: "Sallie Wong",
      email: "salliewong@gmail.com",
    },
    {
      id: "728ed52p",
      amount: 360,
      status: "success",
      username: "Bryan Gutierrez",
      email: "bryangutierrez@gmail.com",
    },
    {
      id: "728ed52q",
      amount: 454,
      status: "pending",
      username: "Erik Rice",
      email: "erikrice@gmail.com",
    },
    {
      id: "728ed52r",
      amount: 382,
      status: "success",
      username: "Jordan Atkins",
      email: "jordanatkins@gmail.com",
    },
    {
      id: "728ed52s",
      amount: 328,
      status: "failed",
      username: "Bill Brewer",
      email: "billbrewer@gmail.com",
    },
    {
      id: "728ed52t",
      amount: 250,
      status: "success",
      username: "Edwin Morris",
      email: "edwinmorris@gmail.com",
    },
    {
      id: "728ed52u",
      amount: 658,
      status: "success",
      username: "Harold Becker",
      email: "haroldbecker@gmail.com",
    },
    {
      id: "728ed52v",
      amount: 691,
      status: "success",
      username: "Hannah Rodriguez",
      email: "hannahrodriguez@gmail.com",
    },
    {
      id: "728ed52w",
      amount: 969,
      status: "success",
      username: "Zachary Beck",
      email: "zacharybeck@gmail.com",
    },
    {
      id: "728ed52x",
      amount: 617,
      status: "failed",
      username: "Frances Potter",
      email: "francespotter@gmail.com",
    },
    {
      id: "728ed52y",
      amount: 173,
      status: "success",
      username: "Raymond Murray",
      email: "raymondmurray@gmail.com",
    },
    {
      id: "728ed52z",
      amount: 843,
      status: "success",
      username: "Adam Sherman",
      email: "adamsherman@gmail.com",
    },
    {
      id: "728ed521f",
      amount: 914,
      status: "pending",
      username: "Anne Cruz",
      email: "annecruz@gmail.com",
    },
  ];
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
