import prisma from "@/lib/prisma";


export default async function handler (req, res) {

    if (req.method === "GET") {
        try {
            // veritabanındaki tüm todoları al 
            const todos = await prisma.todo.findMany();

            // 200 (başarılı) kodu ile JSON olarak geri dön
            return res.status(200).json(todos);
        } catch (error) {
            // hata olursa 500 (server error) dön
            return res.status(500).json({error: "Something went wrong"});
        }
    }

    // eğer gelen istek POST ise 
    if (req.method === "POST") {
        try {
            const { title, description } = req.body; // frontendden gelen veiyi al

            //yeni todo oluşturur
            const newTodo = await prisma.todo.create({
                data: {
                    title,
                    description,
                },
            });

            // 201 = create
            return res.status(201).json(newTodo);
        } catch (error) {
            return res.status(500).json({ error: "Failed to create todo"});
        }
    }
        // eğer gelen istek "PUT"
        if (req.method ===  "PUT") {
            try {
                const { id } = req.query; // hangi todo güncellenecek

                // frontendden gelen güncelleme verileri
                const { title, description, status } = req.body;

                // todo güncelle
                const updatedTodo = await prisma.todo.update({
                    where: { id },
                    data: {
                        // eğer title gönderildiyse güncelle yoksa dokunmaz
                        ...(title !== undefined ? { title } : {}),
                        ...(description !== undefined ? { description } : {}),
                        ...(status !== undefined ? { status } : {}),
                    },
                });
                // başarılı güncelleme 
                return res.status(200).json(updatedTodo);
            } catch (error) {
                return res.status(500).json({ error: "Failed to update todo" });
            }
        }
        // eğer gelen istek delete ise
        if (req.method === "DELETE") {
                try {
                    // hangi todo silenecek ?
                    const { id } = req.query;

                    // todoyu sil
                    await prisma.todo.delete({
                        where: { id },
                    });

                    // silme sonrası cevap
                    return res.status(200).json({ ok: true, message: "Todo deleted" });
                } catch (error) {
                    return res.status(500).json({ error: "Failed to delete todo" });
                }
        }

        return res.status(405).json({ message: "Method not allowed" });
}