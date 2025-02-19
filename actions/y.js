// import { db } from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";


// const serializeTransaction = (obj) => {
//     const serialized = { ...obj };
//     if (obj.balance) {
//       serialized.balance = obj.balance.toNumber();
//     }

//   };


// export async function createAccount(data) {
//   try {
//     const { userId } = await auth();
//     if (!userId) throw new Error("Unauthorized");

//         const user = await db.user.findUnique({
//           where: { clerkUserID: userId },
//         });
    
//         if (!user) {
//           throw new Error("User not found");
//         }


//     // Convert balance to float before saving
//     const balanceFloat = parseFloat(data.balance);
//     if (isNaN(balanceFloat)) {
//       throw new Error("Invalid balance amount");
//     }

//     // Check if this is the user's first account
//     const existingAccounts = await db.account.findMany({
//         where: { userId: user.id },
//       });


//       const shouldBeDefault =
//       existingAccounts.length === 0 ? true : data.isDefault;

//       if (shouldBeDefault) {
//         await db.account.updateMany({
//           where: { userId: user.id, isDefault: true },
//           data: { isDefault: false },
//         });
//       }

//       // Create new account
//     const account = await db.account.create({
//         data: {
//           ...data,
//           balance: balanceFloat,
//           userId: user.id,
//           isDefault: shouldBeDefault, // Override the isDefault based on our logic
//         },
//       });

//     const serializedAccount = serializeTransaction(account);
    
//     revalidatePath("/dashboard");
//       return { success: true, data: serializedAccount };
//     } catch (error) {
//       throw new Error(error.message);
//     }

// }
