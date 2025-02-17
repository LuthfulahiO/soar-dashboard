import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { PencilIcon } from "@/assets/icons";
import { FormError } from "@/components/form-error";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Skeleton } from "@/components/skeleton";
import { useUserProfile } from "@/hooks/use-queries";
import { cn } from "@/lib/utils";

const profileFormSchema = z.object({
  yourName: z.string().min(2, "Name must be at least 2 characters"),
  userName: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(16, "Password must be at least 16 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  presentAddress: z.string().min(1, "Present address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  profileImage: z.any().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function EditProfile() {
  const { data: profile, isLoading } = useUserProfile();
  const [previewImage, setPreviewImage] = useState<string>(
    "/images/profile-picture.png"
  );
  const [isHovering, setIsHovering] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      yourName: "",
      userName: "",
      email: "",
      password: "",
      dateOfBirth: "",
      presentAddress: "",
      permanentAddress: "",
      postalCode: "",
      city: "",
      country: "",
    },
  });

  useEffect(() => {
    if (profile) {
      reset(profile);
      if (profile.profileImage) {
        setPreviewImage(profile.profileImage);
      }
    }
  }, [profile, reset]);

  const handleImageChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        // Create preview URL for the selected image
        const imageUrl = URL.createObjectURL(file);
        setPreviewImage(imageUrl);
      }
    },
    []
  );

  const handleDateInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const date = e.target.valueAsDate;
      if (date) {
        e.target.setAttribute("data-display", formatDate(date));
      }
    },
    []
  );

  const onSubmit = (data: ProfileFormValues) => {
    console.warn(data);
  };

  if (isLoading) {
    return (
      <div className="w-full px-0.5 lg:pl-[30px] space-y-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-14">
          <Skeleton className="w-[90px] h-[90px] rounded-full bg-neutral-500" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full lg:flex-1">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-5 w-20 bg-neutral-500" />
                <Skeleton className="h-[50px] w-full bg-neutral-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-0.5 lg:pl-[30px]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-14">
          <div
            className="relative mb-6 lg:mb-0 group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              role="button"
              tabIndex={0}
              aria-label="Change profile picture"
              className={cn(
                "w-[90px] h-[90px] rounded-full overflow-hidden cursor-pointer",
                "transition-all duration-200",
                isHovering && "ring-2 ring-neutral-900/20"
              )}
              onClick={() => document.getElementById("profileImage")?.click()}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  document.getElementById("profileImage")?.click();
                }
              }}
            >
              <img
                src={previewImage}
                alt="Profile picture"
                className={cn(
                  "w-full h-full object-cover",
                  isHovering && "opacity-75"
                )}
              />
            </div>

            <label
              htmlFor="profileImage"
              className={cn(
                "absolute -bottom-1 -right-1 w-[30px] h-[30px]",
                "bg-neutral-900 rounded-full cursor-pointer",
                "flex items-center justify-center",
                "transition-all duration-200",
                "hover:bg-neutral-900/90 active:scale-95",
                "focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
              )}
              aria-label="Change profile picture"
            >
              <PencilIcon aria-hidden="true" />
              <input
                type="file"
                id="profileImage"
                accept="image/png,image/jpeg,image/jpg,image/avif"
                className="hidden"
                aria-label="Upload profile picture"
                {...register("profileImage", {
                  onChange: handleImageChange,
                })}
              />
            </label>

            {isHovering && (
              <div
                className={cn(
                  "absolute inset-0 rounded-full",
                  "flex items-center justify-center",
                  "bg-black/40 text-white text-xs",
                  "pointer-events-none"
                )}
              >
                Change Photo
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full lg:flex-1">
            {/* Your Name */}
            <div className="space-y-2">
              <Label htmlFor="yourName">Your Name</Label>
              <Input
                id="yourName"
                {...register("yourName")}
                error={!!errors.yourName}
                placeholder="Charlene Reed"
              />
              <FormError message={errors.yourName?.message} />
            </div>

            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="userName">User Name</Label>
              <Input
                id="userName"
                {...register("userName")}
                error={!!errors.userName}
                placeholder="charlenereed"
              />
              <FormError message={errors.userName?.message} />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                error={!!errors.email}
                placeholder="charlenereed@gmail.com"
              />
              <FormError message={errors.email?.message} />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                error={!!errors.password}
                placeholder="********"
              />
              <FormError message={errors.password?.message} />
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                {...register("dateOfBirth")}
                error={!!errors.dateOfBirth}
                placeholder="25 January 1990"
                onChange={(e) => {
                  handleDateInput(e);
                  register("dateOfBirth").onChange(e);
                }}
                onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                className="w-full relative [&::-webkit-datetime-edit]:hidden [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-2 [&::-webkit-calendar-picker-indicator]:opacity-100 [&::before]:absolute [&::before]:left-3 [&::before]:top-1/2 [&::before]:-translate-y-1/2 [&::before]:content-[attr(data-display)] [&::before]:text-neutral-500 [&:not(:placeholder-shown)::before]:text-neutral-900 cursor-pointer"
              />
              <FormError message={errors.dateOfBirth?.message} />
            </div>

            {/* Present Address */}
            <div className="space-y-2">
              <Label htmlFor="presentAddress">Present Address</Label>
              <Input
                id="presentAddress"
                {...register("presentAddress")}
                error={!!errors.presentAddress}
                placeholder="San Jose, California, USA"
              />
              <FormError message={errors.presentAddress?.message} />
            </div>

            {/* Permanent Address */}
            <div className="space-y-2">
              <Label htmlFor="permanentAddress">Permanent Address</Label>
              <Input
                id="permanentAddress"
                {...register("permanentAddress")}
                error={!!errors.permanentAddress}
                placeholder="San Jose, California, USA"
              />
              <FormError message={errors.permanentAddress?.message} />
            </div>

            {/* Postal Code */}
            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                id="postalCode"
                {...register("postalCode")}
                error={!!errors.postalCode}
                placeholder="45962"
              />
              <FormError message={errors.postalCode?.message} />
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                {...register("city")}
                error={!!errors.city}
                placeholder="San Jose"
              />
              <FormError message={errors.city?.message} />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                {...register("country")}
                error={!!errors.country}
                placeholder="USA"
              />
              <FormError message={errors.country?.message} />
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end lg:mt-10 mt-4">
          <button
            type="submit"
            className={cn(
              "w-full lg:w-[190px] h-[50px]",
              "bg-neutral-900 text-white rounded-[12px] cursor-pointer",
              "text-[1.125rem] font-medium",
              "transition-all duration-200",
              "hover:bg-neutral-900/90 active:scale-95",
              "focus:outline-none focus:ring-2 focus:ring-neutral-900/20",
              "disabled:bg-neutral-400 disabled:cursor-not-allowed"
            )}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
