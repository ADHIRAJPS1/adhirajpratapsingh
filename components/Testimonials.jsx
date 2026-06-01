<section className="px-8 lg:px-20 py-24 bg-[#06101f]">

<h2 className="text-center text-5xl font-bold">
Client Testimonials
</h2>

<div className="grid md:grid-cols-3 gap-8 mt-16">

{[
"Exceptional market research.",
"Professional consulting support.",
"Detailed insights and analytics."
].map((review,index)=>(

<div
key={index}
className="bg-[#0c1728] p-8 rounded-3xl"
>
<p className="text-gray-300">
{review}
</p>

<div className="mt-8">
<h4 className="font-bold">
Client Name
</h4>

<p className="text-gray-500">
CEO
</p>
</div>

</div>

))}

</div>

</section>