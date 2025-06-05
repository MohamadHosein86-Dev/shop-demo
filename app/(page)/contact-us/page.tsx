"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message must be at least 5 characters")
});

type ContactFormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form Submitted:", data);
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded shadow">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input type="text" {...register("name")} className="w-full border border-gray-300 rounded px-3 py-2" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input type="email" {...register("email")} className="w-full border border-gray-300 rounded px-3 py-2" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea rows={4} {...register("message")} className="w-full border border-gray-300 rounded px-3 py-2" />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Send Message
        </button>

        {isSubmitSuccessful && <p className="text-green-600 text-center mt-2">Message sent successfully!</p>}
      </form>
    </div>
  );
}
