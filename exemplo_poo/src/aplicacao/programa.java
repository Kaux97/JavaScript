package aplicacao;
	
	import java.util.Scanner;

public class programa {
	public static void programa (String []args) {
		Scanner teclado = new Scanner(System.in);
		Produto produto= new Produto();
		
		System.out.println("Informe um Produto:");
		produto.produto = teclado.next();
		
		System.out.println("Informe a Quantidade:");
		produto.quantidade = teclado.nextDouble();
		
		System.out.println("Informe um Preço:");
		produto.preco = teclado.nextDouble();
		
		System.out.println("Confirmação" + produto.produto + "Estoque:" + produto.quantidade + "Preço: " + produto.preco);
		
		System.out.println("Deseja inserir mais produtos? Quantos:");
		int estoque = teclado.nextInt();
		produto.addProdutos(estoque);
		
		System.out.println("Atualização, alguma venda foi realizada? ");
		estoque=teclado.nextInt();
		produto.subProdutos(estoque);
		
		System.out.println("Atualização pós vendas: "+produto.produto+", Estoque Atual: "+produto.quantidade+",Preço: "+produto.preco);
		
		
		
		
		
		
		
		
		
		
		
		
		
		teclado.close();
	}

}
