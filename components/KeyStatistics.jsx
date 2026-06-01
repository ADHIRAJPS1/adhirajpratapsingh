<section className="px-8 lg:px-20 py-24">

<div className="grid md:grid-cols-4 gap-8">

{[
["40+","Clients Served"],
["100+","Research Reports"],
["15+","Industries Covered"],
["98%","Client Satisfaction"]
].map((item,index)=>(

<div
key={index}
className="text-center p-10 bg-[#071224] rounded-3xl"
>
<h2 className="text-6xl font-bold text-yellow-400">
{item[0]}
</h2>

<p className="mt-4 text-gray-400">
{item[1]}
</p>

</div>

))}

</div>

</section>