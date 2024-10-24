import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchTest({ searchParams }){

    const info = [
        { company: "Amazon", id: 1 },
        { company: "Asssa", id: 2 },
        { company: "Loppper", id: 3 },
      ];

    const searchTerm = searchParams?.term || "";

    const filteredInfos = info.filter(item => 
        (item.company && item.company.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <form method="get" action="">
                <Input defaultValue={searchTerm} name="term" type="text" />
                <Button type="submit">Submit</Button>
            </form>
            <form className="w-full">
                <input className="hidden" defaultValue={""} />
                <Button variant={"secondary"} type="submit" className="w-full text-center bg-blue-100">Reset Search</Button>
            </form>
            <div>
                <h1>Results</h1>
                {
                    filteredInfos?.map((item) => {
                        return (
                            <div className="border-2 border-black" key={item.id}>
                                <h1>{item.company}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
